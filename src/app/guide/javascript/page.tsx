'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Star, BookOpen, Play, Code } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const JavaScriptGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jsTopics = [
    // 기초 개념
    {
      category: 'basics',
      title: '변수와 데이터 타입',
      difficulty: 'beginner',
      description: 'JavaScript의 기본 데이터 타입과 변수 선언',
      code: `// 변수 선언
let name = "신승반점";
const address = "인천 중구 차이나타운로 123";
var phone = "032-123-4567";

// 데이터 타입
let number = 8000;           // 숫자
let string = "짜장면";       // 문자열
let boolean = true;          // 불리언
let array = ["짜장면", "짬뽕", "탕수육"];  // 배열
let object = {               // 객체
  name: "짜장면",
  price: 8000,
  spicy: false
};

// 타입 확인
console.log(typeof number);  // "number"
console.log(typeof string);  // "string"
console.log(typeof boolean); // "boolean"`,
      output: `"number"
"string"
"boolean"`,
      useCase: '데이터 저장, 값 조작, 타입 검사'
    },
    {
      category: 'basics',
      title: '함수',
      difficulty: 'beginner',
      description: '함수 선언과 호출, 매개변수와 반환값',
      code: `// 함수 선언
function calculateTotal(price, quantity) {
  return price * quantity;
}

// 함수 표현식
const addTax = function(amount) {
  return amount * 1.1;
};

// 화살표 함수
const formatPrice = (price) => \`\${price.toLocaleString()}원\`;

// 함수 호출
let menuPrice = 8000;
let orderQuantity = 2;
let total = calculateTotal(menuPrice, orderQuantity);
let totalWithTax = addTax(total);

console.log(\`총 가격: \${formatPrice(totalWithTax)}\`);

// 기본 매개변수
function greetCustomer(name = "고객님") {
  return \`안녕하세요, \${name}!\`;
}

console.log(greetCustomer());        // "안녕하세요, 고객님!"
console.log(greetCustomer("김철수")); // "안녕하세요, 김철수!"`,
      output: `"총 가격: 17,600원"
"안녕하세요, 고객님!"
"안녕하세요, 김철수!"`,
      useCase: '코드 재사용, 로직 분리, 계산 처리'
    },
    {
      category: 'basics',
      title: '조건문과 반복문',
      difficulty: 'beginner',
      description: 'if문, switch문, for문, while문을 활용한 제어 흐름',
      code: `// 조건문
let orderTime = 14; // 2시
let message;

if (orderTime < 11) {
  message = "아직 영업시간이 아닙니다.";
} else if (orderTime > 22) {
  message = "영업시간이 끝났습니다.";
} else {
  message = "주문 가능합니다!";
}

// switch문
let menu = "짜장면";
let recommendation;

switch (menu) {
  case "짜장면":
    recommendation = "탕수육을 함께 드세요!";
    break;
  case "짬뽕":
    recommendation = "군만두를 추천합니다!";
    break;
  default:
    recommendation = "모든 메뉴가 맛있습니다!";
}

// for문
let menuItems = ["짜장면", "짬뽕", "탕수육"];
for (let i = 0; i < menuItems.length; i++) {
  console.log(\`\${i + 1}. \${menuItems[i]}\`);
}

// for...of문
for (let item of menuItems) {
  console.log(\`추천 메뉴: \${item}\`);
}

// while문
let waitingNumber = 5;
while (waitingNumber > 0) {
  console.log(\`대기 번호: \${waitingNumber}\`);
  waitingNumber--;
}`,
      output: `"1. 짜장면"
"2. 짬뽕"
"3. 탕수육"
"추천 메뉴: 짜장면"
"추천 메뉴: 짬뽕"
"추천 메뉴: 탕수육"
"대기 번호: 5"
"대기 번호: 4"
"대기 번호: 3"
"대기 번호: 2"
"대기 번호: 1"`,
      useCase: '조건부 실행, 반복 처리, 메뉴 표시'
    },

    // 배열과 객체
    {
      category: 'data',
      title: '배열 메서드',
      difficulty: 'intermediate',
      description: '배열을 다루는 다양한 메서드들',
      code: `let menu = [
  { name: "짜장면", price: 8000, category: "면" },
  { name: "짬뽕", price: 9000, category: "면" },
  { name: "탕수육", price: 25000, category: "요리" },
  { name: "군만두", price: 12000, category: "요리" }
];

// map: 새로운 배열 생성
let menuNames = menu.map(item => item.name);
console.log(menuNames);

// filter: 조건에 맞는 요소 필터링
let noodleMenu = menu.filter(item => item.category === "면");
console.log(noodleMenu);

// find: 조건에 맞는 첫 번째 요소 찾기
let jjajang = menu.find(item => item.name === "짜장면");
console.log(jjajang);

// reduce: 배열을 하나의 값으로 줄이기
let totalPrice = menu.reduce((sum, item) => sum + item.price, 0);
console.log(\`전체 메뉴 가격 합계: \${totalPrice}원\`);

// forEach: 각 요소에 대해 실행
menu.forEach((item, index) => {
  console.log(\`\${index + 1}. \${item.name} - \${item.price}원\`);
});

// sort: 정렬
let sortedByPrice = menu.sort((a, b) => a.price - b.price);
console.log("가격순 정렬:", sortedByPrice);`,
      output: `["짜장면", "짬뽕", "탕수육", "군만두"]
[{name: "짜장면", price: 8000, category: "면"}, {name: "짬뽕", price: 9000, category: "면"}]
{name: "짜장면", price: 8000, category: "면"}
"전체 메뉴 가격 합계: 54000원"
"1. 짜장면 - 8000원"
"2. 짬뽕 - 9000원"
"3. 탕수육 - 25000원"
"4. 군만두 - 12000원"`,
      useCase: '메뉴 필터링, 가격 계산, 데이터 변환'
    },
    {
      category: 'data',
      title: '객체 다루기',
      difficulty: 'intermediate',
      description: '객체의 속성 접근, 수정, 메서드 활용',
      code: `// 객체 생성
let restaurant = {
  name: "신승반점",
  address: "인천 중구 차이나타운로 123",
  phone: "032-123-4567",
  menu: ["짜장면", "짬뽕", "탕수육"],
  isOpen: true,
  
  // 메서드
  getInfo() {
    return \`\${this.name} (\${this.phone})\`;
  },
  
  addMenu(newMenu) {
    this.menu.push(newMenu);
  }
};

// 속성 접근
console.log(restaurant.name);
console.log(restaurant["phone"]);

// 속성 수정
restaurant.isOpen = false;
restaurant.menu.push("볶음밥");

// 메서드 호출
console.log(restaurant.getInfo());

// 객체 분해 할당
let { name, phone, menu } = restaurant;
console.log(\`\${name}: \${phone}\`);

// 객체 복사
let restaurantCopy = { ...restaurant };
let menuCopy = [...restaurant.menu];

// Object 메서드들
let keys = Object.keys(restaurant);
let values = Object.values(restaurant);
let entries = Object.entries(restaurant);

console.log("키:", keys);
console.log("값:", values);

// 동적 속성 추가
restaurant.rating = 4.5;
restaurant["openTime"] = "11:00";

console.log(restaurant);`,
      output: `"신승반점"
"032-123-4567"
"신승반점 (032-123-4567)"
"신승반점: 032-123-4567"
"키: ["name", "address", "phone", "menu", "isOpen", "getInfo", "addMenu"]`,
      useCase: '데이터 구조화, 정보 저장, 메서드 구현'
    },

    // DOM 조작
    {
      category: 'dom',
      title: 'DOM 요소 선택과 조작',
      difficulty: 'intermediate',
      description: 'HTML 요소를 선택하고 내용을 변경하는 방법',
      code: `// 요소 선택
let titleElement = document.getElementById("title");
let menuItems = document.querySelectorAll(".menu-item");
let firstButton = document.querySelector("button");

// 내용 변경
titleElement.textContent = "신승반점 메뉴";
titleElement.innerHTML = "<strong>신승반점</strong> 메뉴";

// 스타일 변경
titleElement.style.color = "red";
titleElement.style.fontSize = "24px";

// 클래스 조작
titleElement.classList.add("highlight");
titleElement.classList.remove("old-style");
titleElement.classList.toggle("active");

// 속성 조작
let image = document.querySelector("img");
image.setAttribute("alt", "짜장면 사진");
image.src = "jjajang.jpg";

// 요소 생성과 추가
let newMenuItem = document.createElement("div");
newMenuItem.className = "menu-item";
newMenuItem.innerHTML = \`
  <h3>새로운 메뉴</h3>
  <p>맛있는 새 메뉴입니다</p>
  <span class="price">10,000원</span>
\`;

let menuContainer = document.getElementById("menu-container");
menuContainer.appendChild(newMenuItem);

// 이벤트 리스너
let orderButton = document.getElementById("order-btn");
orderButton.addEventListener("click", function() {
  alert("주문이 접수되었습니다!");
});

// 폼 다루기
let orderForm = document.getElementById("order-form");
orderForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let menuName = document.getElementById("menu-select").value;
  let quantity = document.getElementById("quantity").value;
  
  console.log(\`주문: \${menuName} \${quantity}개\`);
});`,
      output: `// 콘솔에 출력되는 내용
"주문: 짜장면 2개"
// 알림창 표시
"주문이 접수되었습니다!"`,
      useCase: '메뉴 표시, 주문 폼, 동적 콘텐츠'
    },

    // 비동기 처리
    {
      category: 'async',
      title: 'Promise와 async/await',
      difficulty: 'advanced',
      description: '비동기 처리를 위한 Promise와 async/await 사용법',
      code: `// Promise 생성
function fetchMenu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let menu = [
        { name: "짜장면", price: 8000 },
        { name: "짬뽕", price: 9000 },
        { name: "탕수육", price: 25000 }
      ];
      resolve(menu);
    }, 1000);
  });
}

// Promise 사용
fetchMenu()
  .then(menu => {
    console.log("메뉴 로드 완료:", menu);
    return menu.filter(item => item.price < 10000);
  })
  .then(cheapMenu => {
    console.log("저렴한 메뉴:", cheapMenu);
  })
  .catch(error => {
    console.error("메뉴 로드 실패:", error);
  });

// async/await 사용
async function loadMenuAndDisplay() {
  try {
    console.log("메뉴를 불러오는 중...");
    let menu = await fetchMenu();
    console.log("메뉴 로드 완료:", menu);
    
    let cheapMenu = menu.filter(item => item.price < 10000);
    console.log("저렴한 메뉴:", cheapMenu);
    
    return cheapMenu;
  } catch (error) {
    console.error("메뉴 로드 실패:", error);
  }
}

// API 호출 예제
async function submitOrder(orderData) {
  try {
    let response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
      throw new Error('주문 처리 실패');
    }
    
    let result = await response.json();
    console.log("주문 완료:", result);
    return result;
  } catch (error) {
    console.error("주문 실패:", error);
    throw error;
  }
}

// 사용 예제
loadMenuAndDisplay();

let orderData = {
  menu: "짜장면",
  quantity: 2,
  customerName: "김철수"
};

submitOrder(orderData)
  .then(result => {
    alert(\`주문 완료! 주문번호: \${result.orderId}\`);
  })
  .catch(error => {
    alert("주문 처리 중 오류가 발생했습니다.");
  });`,
      output: `"메뉴를 불러오는 중..."
"메뉴 로드 완료: [{name: '짜장면', price: 8000}, {name: '짬뽕', price: 9000}, {name: '탕수육', price: 25000}]"
"저렴한 메뉴: [{name: '짜장면', price: 8000}, {name: '짬뽕', price: 9000}]"
"주문 완료: {orderId: 'ORDER123', status: 'confirmed'}"`,
      useCase: 'API 호출, 데이터 로딩, 주문 처리'
    },

    // 최신 JavaScript
    {
      category: 'modern',
      title: 'ES6+ 최신 문법',
      difficulty: 'advanced',
      description: 'ES6 이후의 최신 JavaScript 문법과 기능들',
      code: `// 구조 분해 할당
let menu = { name: "짜장면", price: 8000, category: "면" };
let { name, price } = menu;
let { name: menuName, price: menuPrice } = menu;

let items = ["짜장면", "짬뽕", "탕수육"];
let [first, second, ...rest] = items;

// 템플릿 리터럴
let customerName = "김철수";
let orderMessage = \`
  안녕하세요, \${customerName}님!
  주문하신 \${name}의 가격은 \${price}원입니다.
  총 \${items.length}개의 메뉴가 있습니다.
\`;

// 화살표 함수
let menuItems = [
  { name: "짜장면", price: 8000 },
  { name: "짬뽕", price: 9000 }
];

let expensiveItems = menuItems
  .filter(item => item.price > 8000)
  .map(item => ({ ...item, expensive: true }));

// 클래스
class Restaurant {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.menu = [];
  }
  
  addMenu(menu) {
    this.menu.push(menu);
  }
  
  getMenuByPrice(maxPrice) {
    return this.menu.filter(item => item.price <= maxPrice);
  }
  
  // static 메서드
  static createKoreanRestaurant(name) {
    return new Restaurant(name, "대한민국");
  }
}

let restaurant = new Restaurant("신승반점", "인천 중구");
restaurant.addMenu({ name: "짜장면", price: 8000 });

// 모듈 (import/export)
// math.js
export function calculateTax(price) {
  return price * 0.1;
}

export default function formatPrice(price) {
  return \`\${price.toLocaleString()}원\`;
}

// main.js
import formatPrice, { calculateTax } from './math.js';

// 옵셔널 체이닝
let customer = {
  name: "김철수",
  address: {
    city: "서울",
    detail: "강남구"
  }
};

let city = customer?.address?.city; // "서울"
let zipCode = customer?.address?.zipCode; // undefined

// Nullish coalescing
let displayName = customer.nickname ?? customer.name ?? "고객님";

console.log(displayName); // "김철수"`,
      output: `"김철수"
"안녕하세요, 김철수님!..."
[{name: "짬뽕", price: 9000, expensive: true}]
"서울"
undefined
"김철수"`,
      useCase: '모던 웹 개발, 컴포넌트 구조, 모듈 시스템'
    },

    // 에러 처리
    {
      category: 'error',
      title: '에러 처리',
      difficulty: 'intermediate',
      description: 'try-catch문과 에러 처리 패턴',
      code: `// 기본 에러 처리
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }
  return a / b;
}

try {
  let result = divideNumbers(10, 0);
  console.log(result);
} catch (error) {
  console.error("에러 발생:", error.message);
} finally {
  console.log("계산 완료");
}

// 사용자 정의 에러
class OrderError extends Error {
  constructor(message, orderData) {
    super(message);
    this.name = "OrderError";
    this.orderData = orderData;
  }
}

function processOrder(order) {
  if (!order.menu) {
    throw new OrderError("메뉴를 선택해주세요.", order);
  }
  
  if (order.quantity <= 0) {
    throw new OrderError("수량은 1개 이상이어야 합니다.", order);
  }
  
  // 주문 처리 로직
  return {
    orderId: "ORDER123",
    status: "confirmed",
    menu: order.menu,
    quantity: order.quantity
  };
}

// 에러 처리 예제
try {
  let order = { menu: "", quantity: 0 };
  let result = processOrder(order);
  console.log("주문 완료:", result);
} catch (error) {
  if (error instanceof OrderError) {
    console.error("주문 오류:", error.message);
    console.error("주문 데이터:", error.orderData);
  } else {
    console.error("알 수 없는 오류:", error);
  }
}

// 비동기 에러 처리
async function fetchMenuWithErrorHandling() {
  try {
    let response = await fetch('/api/menu');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    let menu = await response.json();
    return menu;
  } catch (error) {
    console.error("메뉴 로드 실패:", error);
    
    // 기본값 반환
    return [
      { name: "짜장면", price: 8000 },
      { name: "짬뽕", price: 9000 }
    ];
  }
}

// Promise 체인에서 에러 처리
fetchMenuWithErrorHandling()
  .then(menu => {
    console.log("메뉴:", menu);
    return menu.filter(item => item.price < 10000);
  })
  .then(cheapMenu => {
    console.log("저렴한 메뉴:", cheapMenu);
  })
  .catch(error => {
    console.error("처리 실패:", error);
  });`,
      output: `"에러 발생: 0으로 나눌 수 없습니다."
"계산 완료"
"주문 오류: 메뉴를 선택해주세요."
"주문 데이터: {menu: '', quantity: 0}"
"메뉴: [{name: '짜장면', price: 8000}, {name: '짬뽕', price: 9000}]"
"저렴한 메뉴: [{name: '짜장면', price: 8000}, {name: '짬뽕', price: 9000}]"`,
      useCase: '입력 검증, 네트워크 오류 처리, 안정성 확보'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'basics', name: '기초', icon: '🔤' },
    { id: 'data', name: '데이터 구조', icon: '📊' },
    { id: 'dom', name: 'DOM 조작', icon: '🌐' },
    { id: 'async', name: '비동기', icon: '⏱️' },
    { id: 'modern', name: '최신 문법', icon: '🚀' },
    { id: 'error', name: '에러 처리', icon: '🚨' }
  ];

  const difficulties = [
    { id: 'beginner', name: '초급', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: '중급', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'advanced', name: '고급', color: 'bg-red-100 text-red-800' }
  ];

  const filteredTopics = jsTopics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const runCode = (code: string) => {
    try {
      // 안전한 코드 실행을 위한 기본 구현
      // 실제 환경에서는 더 안전한 sandbox 환경 필요
      const result = eval(code);
      return result;
    } catch (error) {
      return `Error: ${error instanceof Error ? error.message : String(error)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guide" className="text-primary-600 hover:text-primary-700">
                가이드
              </Link>
              <span className="text-secondary-400">/</span>
              <span className="text-secondary-700">JavaScript 기초부터 실전까지</span>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                ⚡ JavaScript 기초부터 실전까지
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                변수, 함수, 객체부터 최신 ES6+ 문법까지 완벽 마스터
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  4.7점 (3,421개 평가)
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {jsTopics.length}개 주제
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
              <Input
                placeholder="JavaScript 주제 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* JavaScript Topics */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl text-secondary-900">
                        {topic.title}
                      </CardTitle>
                      <Badge 
                        className={`text-xs ${difficulties.find(d => d.id === topic.difficulty)?.color}`}
                      >
                        {difficulties.find(d => d.id === topic.difficulty)?.name}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === topic.category)?.icon}
                    </Badge>
                  </div>
                  <p className="text-secondary-600 mb-2">{topic.description}</p>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {topic.useCase}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="code" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="code">코드</TabsTrigger>
                      <TabsTrigger value="output">출력</TabsTrigger>
                      <TabsTrigger value="explanation">설명</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="code" className="mt-4">
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-secondary-700">
                            JavaScript 코드:
                          </h4>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(topic.code)}
                              className="h-8 w-8 p-0"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              title="실행하기"
                            >
                              <Play className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <pre className="text-sm bg-secondary-50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                          {topic.code}
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="output" className="mt-4">
                      <div className="relative">
                        <h4 className="text-sm font-medium text-secondary-700 mb-2">
                          실행 결과:
                        </h4>
                        <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          <pre className="whitespace-pre-wrap">
                            {topic.output}
                          </pre>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="explanation" className="mt-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">💡 핵심 포인트</h4>
                        <div className="text-sm text-blue-800">
                          <p className="mb-2">{topic.description}</p>
                          <p><strong>활용 예시:</strong> {topic.useCase}</p>
                          <p className="mt-2">
                            <strong>레벨:</strong> {difficulties.find(d => d.id === topic.difficulty)?.name}
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-secondary-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-secondary-600 mb-4">
              다른 검색어나 카테고리를 시도해보세요
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              전체 주제 보기
            </Button>
          </div>
        )}

        {/* JavaScript Best Practices */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">💻 JavaScript 모범 사례</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">✅ 좋은 습관</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• const와 let을 사용하고 var는 피하기</li>
                    <li>• 의미 있는 변수명과 함수명 사용</li>
                    <li>• 함수는 한 가지 일만 하도록 작성</li>
                    <li>• 에러 처리를 항상 고려하기</li>
                    <li>• 최신 ES6+ 문법 적극 활용</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">❌ 피해야 할 것</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 전역 변수 남용</li>
                    <li>• 콜백 지옥 (callback hell)</li>
                    <li>• 동기 방식으로 긴 작업 처리</li>
                    <li>• 타입 체크 없이 연산</li>
                    <li>• 메모리 누수 발생 패턴</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Reference */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📋 빠른 참조</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">기본 문법</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">let, const</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">function</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">if, else</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">for, while</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">try, catch</code></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">배열 메서드</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">map()</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">filter()</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">reduce()</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">forEach()</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">find()</code></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">최신 문법</h4>
                  <div className="space-y-1 text-sm text-secondary-600">
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">async/await</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">Promise</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">destructuring</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">template literals</code></div>
                    <div><code className="bg-secondary-100 px-2 py-1 rounded">arrow functions</code></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>📚 관련 가이드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/html-tags">
                    <div>
                      <div className="font-medium">HTML 태그</div>
                      <div className="text-sm text-secondary-600">DOM 조작을 위한 HTML 기초</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/css-layout">
                    <div>
                      <div className="font-medium">CSS 레이아웃</div>
                      <div className="text-sm text-secondary-600">스타일 조작과 애니메이션</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/learning/javascript">
                    <div>
                      <div className="font-medium">JavaScript 실습</div>
                      <div className="text-sm text-secondary-600">직접 만들어보기</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default JavaScriptGuide; 