// 사용자 진행상황 관리 유틸리티

export interface UserProgress {
  userId: string;
  name: string;
  email: string;
  githubUsername?: string;
  currentStep: number;
  completedSteps: number[];
  stepProgress: {
    [key: number]: {
      startTime: string;
      endTime?: string;
      duration?: number;
      status: 'pending' | 'processing' | 'completed' | 'error';
    };
  };
  lastUpdated: string;
  totalTimeSpent: number;
}

export interface SystemStatus {
  nodeVersion: string;
  npmVersion: string;
  gitVersion: string;
  systemInfo: {
    os: string;
    browser: string;
    memory: string;
    connection: string;
  };
}

// 로컬 스토리지 키
const STORAGE_KEYS = {
  USER_PROGRESS: 'user_progress',
  SYSTEM_STATUS: 'system_status',
  CURRENT_SESSION: 'current_session',
};

// 사용자 진행상황 저장
export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving user progress:', error);
  }
};

// 사용자 진행상황 로드
export const loadUserProgress = (): UserProgress | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading user progress:', error);
    return null;
  }
};

// 시스템 상태 저장
export const saveSystemStatus = (status: SystemStatus): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SYSTEM_STATUS, JSON.stringify(status));
  } catch (error) {
    console.error('Error saving system status:', error);
  }
};

// 시스템 상태 로드
export const loadSystemStatus = (): SystemStatus | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SYSTEM_STATUS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading system status:', error);
    return null;
  }
};

// 단계 시작
export const startStep = (stepId: number): void => {
  const progress = loadUserProgress();
  if (!progress) return;

  progress.stepProgress[stepId] = {
    startTime: new Date().toISOString(),
    status: 'processing',
  };
  progress.lastUpdated = new Date().toISOString();

  saveUserProgress(progress);
};

// 단계 완료
export const completeStep = (stepId: number): void => {
  const progress = loadUserProgress();
  if (!progress) return;

  const stepData = progress.stepProgress[stepId];
  if (stepData) {
    stepData.endTime = new Date().toISOString();
    stepData.status = 'completed';
    stepData.duration = new Date(stepData.endTime).getTime() - new Date(stepData.startTime).getTime();
    
    // 완료된 단계 목록에 추가
    if (!progress.completedSteps.includes(stepId)) {
      progress.completedSteps.push(stepId);
    }
    
    // 현재 단계 업데이트
    progress.currentStep = Math.max(progress.currentStep, stepId);
    
    // 총 소요 시간 계산
    progress.totalTimeSpent = Object.values(progress.stepProgress)
      .reduce((total, step) => total + (step.duration || 0), 0);
  }

  progress.lastUpdated = new Date().toISOString();
  saveUserProgress(progress);
};

// 단계 에러 처리
export const errorStep = (stepId: number, error: string): void => {
  const progress = loadUserProgress();
  if (!progress) return;

  if (progress.stepProgress[stepId]) {
    progress.stepProgress[stepId].status = 'error';
  }
  
  progress.lastUpdated = new Date().toISOString();
  saveUserProgress(progress);
};

// 진행률 계산
export const calculateProgress = (totalSteps: number): number => {
  const progress = loadUserProgress();
  if (!progress) return 0;

  return (progress.completedSteps.length / totalSteps) * 100;
};

// 예상 완료 시간 계산
export const estimateCompletionTime = (totalSteps: number): number => {
  const progress = loadUserProgress();
  if (!progress || progress.completedSteps.length === 0) return 0;

  const averageTimePerStep = progress.totalTimeSpent / progress.completedSteps.length;
  const remainingSteps = totalSteps - progress.completedSteps.length;
  
  return averageTimePerStep * remainingSteps;
};

// 시스템 정보 수집
export const collectSystemInfo = (): SystemStatus => {
  return {
    nodeVersion: 'checking...',
    npmVersion: 'checking...',
    gitVersion: 'checking...',
    systemInfo: {
      os: navigator.platform || 'unknown',
      browser: `${navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other'} ${navigator.userAgent.match(/Chrome\/(\d+)/)?.[1] || 'unknown'}`,
      memory: `${(navigator as any).deviceMemory || 'unknown'}GB`,
      connection: (navigator as any).connection?.effectiveType || 'unknown',
    },
  };
};

// 데이터 초기화
export const resetProgress = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USER_PROGRESS);
  localStorage.removeItem(STORAGE_KEYS.SYSTEM_STATUS);
  localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
};

// 통계 정보 생성
export const generateStats = () => {
  const progress = loadUserProgress();
  if (!progress) return null;

  const completedSteps = progress.completedSteps.length;
  const totalTime = progress.totalTimeSpent;
  const averageTimePerStep = completedSteps > 0 ? totalTime / completedSteps : 0;

  return {
    completedSteps,
    totalTime,
    averageTimePerStep,
    lastUpdated: progress.lastUpdated,
  };
}; 