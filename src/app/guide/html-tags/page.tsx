'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Code, Eye, Copy, Star, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const HTMLTagsGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const htmlTags = [
    // 문서 구조 태그
    {
      category: 'structure',
      name: 'html',
      description: 'HTML 문서의 최상위 요소',
      usage: 'document',
      example: '<html lang="ko">\n  <head>...</head>\n  <body>...</body>\n</html>',
      attributes: ['lang', 'dir']
    },
    {
      category: 'structure',
      name: 'head',
      description: '문서의 메타데이터를 포함하는 요소',
      usage: 'document',
      example: '<head>\n  <title>페이지 제목</title>\n  <meta charset="UTF-8">\n</head>',
      attributes: []
    },
    {
      category: 'structure',
      name: 'body',
      description: '문서의 실제 내용을 포함하는 요소',
      usage: 'document',
      example: '<body>\n  <h1>제목</h1>\n  <p>내용</p>\n</body>',
      attributes: []
    },
    {
      category: 'structure',
      name: 'title',
      description: '문서의 제목을 설정하는 요소',
      usage: 'document',
      example: '<title>신승반점 - 인천 차이나타운 맛집</title>',
      attributes: []
    },
    {
      category: 'structure',
      name: 'meta',
      description: '문서의 메타데이터를 설정하는 요소',
      usage: 'document',
      example: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="페이지 설명">',
      attributes: ['charset', 'name', 'content', 'http-equiv']
    },
    {
      category: 'structure',
      name: 'link',
      description: '외부 리소스를 연결하는 요소',
      usage: 'document',
      example: '<link rel="stylesheet" href="styles.css">\n<link rel="icon" href="favicon.ico">',
      attributes: ['rel', 'href', 'type']
    },
    {
      category: 'structure',
      name: 'script',
      description: 'JavaScript 코드를 포함하거나 연결하는 요소',
      usage: 'document',
      example: '<script src="script.js"></script>\n<script>\n  console.log("Hello World");\n</script>',
      attributes: ['src', 'type', 'async', 'defer']
    },

    // 텍스트 태그
    {
      category: 'text',
      name: 'h1',
      description: '가장 중요한 제목 (한 페이지에 하나만 사용)',
      usage: 'heading',
      example: '<h1>신승반점 - 인천 차이나타운 맛집</h1>',
      attributes: []
    },
    {
      category: 'text',
      name: 'h2',
      description: '두 번째 수준의 제목',
      usage: 'heading',
      example: '<h2>대표 메뉴</h2>',
      attributes: []
    },
    {
      category: 'text',
      name: 'h3',
      description: '세 번째 수준의 제목',
      usage: 'heading',
      example: '<h3>짜장면</h3>',
      attributes: []
    },
    {
      category: 'text',
      name: 'h4',
      description: '네 번째 수준의 제목',
      usage: 'heading',
      example: '<h4>영업 시간</h4>',
      attributes: []
    },
    {
      category: 'text',
      name: 'h5',
      description: '다섯 번째 수준의 제목',
      usage: 'heading',
      example: '<h5>주차 안내</h5>',
      attributes: []
    },
    {
      category: 'text',
      name: 'h6',
      description: '여섯 번째 수준의 제목',
      usage: 'heading',
      example: '<h6>기타 사항</h6>',
      attributes: []
    },
    {
      category: 'text',
      name: 'p',
      description: '단락을 나타내는 요소',
      usage: 'text',
      example: '<p>1963년부터 3대째 이어온 정통 중화요리 전문점입니다.</p>',
      attributes: []
    },
    {
      category: 'text',
      name: 'span',
      description: '인라인 요소를 그룹화하는 요소',
      usage: 'text',
      example: '<p>가격: <span class="price">8,000원</span></p>',
      attributes: []
    },
    {
      category: 'text',
      name: 'strong',
      description: '텍스트를 굵게 표시하고 중요함을 나타내는 요소',
      usage: 'text',
      example: '<p><strong>주의:</strong> 매운 음식입니다.</p>',
      attributes: []
    },
    {
      category: 'text',
      name: 'em',
      description: '텍스트를 기울임꼴로 표시하고 강조하는 요소',
      usage: 'text',
      example: '<p>이 메뉴는 <em>특별히</em> 추천합니다.</p>',
      attributes: []
    },
    {
      category: 'text',
      name: 'br',
      description: '줄 바꿈을 만드는 요소',
      usage: 'text',
      example: '<p>인천 중구 차이나타운로 123<br>신승반점</p>',
      attributes: []
    },
    {
      category: 'text',
      name: 'hr',
      description: '주제 분리를 위한 수평선 요소',
      usage: 'text',
      example: '<h2>메뉴</h2>\n<hr>\n<h2>위치</h2>',
      attributes: []
    },

    // 목록 태그
    {
      category: 'list',
      name: 'ul',
      description: '순서가 없는 목록 (불릿 포인트)',
      usage: 'list',
      example: '<ul>\n  <li>짜장면</li>\n  <li>짬뽕</li>\n  <li>탕수육</li>\n</ul>',
      attributes: []
    },
    {
      category: 'list',
      name: 'ol',
      description: '순서가 있는 목록 (번호)',
      usage: 'list',
      example: '<ol>\n  <li>주문하기</li>\n  <li>결제하기</li>\n  <li>음식 받기</li>\n</ol>',
      attributes: ['start', 'type']
    },
    {
      category: 'list',
      name: 'li',
      description: '목록의 각 항목을 나타내는 요소',
      usage: 'list',
      example: '<li>짜장면 - 8,000원</li>',
      attributes: []
    },
    {
      category: 'list',
      name: 'dl',
      description: '설명 목록 (용어와 설명)',
      usage: 'list',
      example: '<dl>\n  <dt>짜장면</dt>\n  <dd>전통 춘장으로 만든 면</dd>\n</dl>',
      attributes: []
    },
    {
      category: 'list',
      name: 'dt',
      description: '설명 목록의 용어',
      usage: 'list',
      example: '<dt>영업시간</dt>',
      attributes: []
    },
    {
      category: 'list',
      name: 'dd',
      description: '설명 목록의 설명',
      usage: 'list',
      example: '<dd>매일 11:00 - 22:00</dd>',
      attributes: []
    },

    // 링크와 미디어 태그
    {
      category: 'media',
      name: 'a',
      description: '하이퍼링크를 만드는 요소',
      usage: 'link',
      example: '<a href="tel:032-123-4567">전화하기</a>\n<a href="mailto:info@shinseung.com">이메일</a>',
      attributes: ['href', 'target', 'rel']
    },
    {
      category: 'media',
      name: 'img',
      description: '이미지를 표시하는 요소',
      usage: 'media',
      example: '<img src="jjajang.jpg" alt="짜장면 사진" width="300" height="200">',
      attributes: ['src', 'alt', 'width', 'height']
    },
    {
      category: 'media',
      name: 'video',
      description: '동영상을 재생하는 요소',
      usage: 'media',
      example: '<video controls width="400">\n  <source src="restaurant.mp4" type="video/mp4">\n</video>',
      attributes: ['controls', 'width', 'height', 'autoplay', 'loop']
    },
    {
      category: 'media',
      name: 'audio',
      description: '오디오를 재생하는 요소',
      usage: 'media',
      example: '<audio controls>\n  <source src="background.mp3" type="audio/mpeg">\n</audio>',
      attributes: ['controls', 'autoplay', 'loop']
    },
    {
      category: 'media',
      name: 'source',
      description: '미디어 리소스를 지정하는 요소',
      usage: 'media',
      example: '<source src="video.mp4" type="video/mp4">',
      attributes: ['src', 'type']
    },

    // 구조 태그
    {
      category: 'semantic',
      name: 'header',
      description: '문서나 섹션의 헤더 영역',
      usage: 'layout',
      example: '<header>\n  <h1>신승반점</h1>\n  <nav>...</nav>\n</header>',
      attributes: []
    },
    {
      category: 'semantic',
      name: 'nav',
      description: '네비게이션 링크 영역',
      usage: 'layout',
      example: '<nav>\n  <ul>\n    <li><a href="#menu">메뉴</a></li>\n    <li><a href="#about">소개</a></li>\n  </ul>\n</nav>',
      attributes: []
    },
    {
      category: 'semantic',
      name: 'main',
      description: '문서의 주요 콘텐츠 영역',
      usage: 'layout',
      example: '<main>\n  <section>...</section>\n  <article>...</article>\n</main>',
      attributes: []
    },
    {
      category: 'semantic',
      name: 'section',
      description: '문서의 구역을 나타내는 요소',
      usage: 'layout',
      example: '<section id="menu">\n  <h2>메뉴</h2>\n  <p>다양한 중화요리...</p>\n</section>',
      attributes: []
    },
    {
      category: 'semantic',
      name: 'article',
      description: '독립적인 콘텐츠 영역',
      usage: 'layout',
      example: '<article>\n  <h3>짜장면 리뷰</h3>\n  <p>정말 맛있었습니다...</p>\n</article>',
      attributes: []
    },
    {
      category: 'semantic',
      name: 'aside',
      description: '사이드바나 부가 정보 영역',
      usage: 'layout',
      example: '<aside>\n  <h4>추천 메뉴</h4>\n  <ul><li>짬뽕</li></ul>\n</aside>',
      attributes: []
    },
    {
      category: 'semantic',
      name: 'footer',
      description: '문서나 섹션의 푸터 영역',
      usage: 'layout',
      example: '<footer>\n  <p>&copy; 2024 신승반점. All rights reserved.</p>\n</footer>',
      attributes: []
    },

    // 폼 태그
    {
      category: 'form',
      name: 'form',
      description: '사용자 입력 양식을 만드는 요소',
      usage: 'form',
      example: '<form action="/submit" method="POST">\n  <input type="text" name="name">\n  <button type="submit">제출</button>\n</form>',
      attributes: ['action', 'method', 'enctype']
    },
    {
      category: 'form',
      name: 'input',
      description: '사용자 입력 필드',
      usage: 'form',
      example: '<input type="text" name="name" placeholder="이름을 입력하세요">\n<input type="email" name="email" required>',
      attributes: ['type', 'name', 'value', 'placeholder', 'required']
    },
    {
      category: 'form',
      name: 'textarea',
      description: '여러 줄 텍스트 입력 필드',
      usage: 'form',
      example: '<textarea name="message" rows="5" cols="30" placeholder="메시지를 입력하세요"></textarea>',
      attributes: ['name', 'rows', 'cols', 'placeholder']
    },
    {
      category: 'form',
      name: 'button',
      description: '클릭 가능한 버튼',
      usage: 'form',
      example: '<button type="submit">주문하기</button>\n<button type="button" onclick="alert(\'클릭!\')">알림</button>',
      attributes: ['type', 'onclick']
    },
    {
      category: 'form',
      name: 'select',
      description: '드롭다운 선택 메뉴',
      usage: 'form',
      example: '<select name="menu">\n  <option value="jjajang">짜장면</option>\n  <option value="jjamppong">짬뽕</option>\n</select>',
      attributes: ['name', 'multiple']
    },
    {
      category: 'form',
      name: 'option',
      description: '선택 메뉴의 옵션',
      usage: 'form',
      example: '<option value="jjajang" selected>짜장면</option>',
      attributes: ['value', 'selected']
    },
    {
      category: 'form',
      name: 'label',
      description: '폼 요소의 레이블',
      usage: 'form',
      example: '<label for="name">이름:</label>\n<input type="text" id="name" name="name">',
      attributes: ['for']
    },

    // 테이블 태그
    {
      category: 'table',
      name: 'table',
      description: '표를 만드는 요소',
      usage: 'table',
      example: '<table>\n  <tr>\n    <th>메뉴</th>\n    <th>가격</th>\n  </tr>\n  <tr>\n    <td>짜장면</td>\n    <td>8,000원</td>\n  </tr>\n</table>',
      attributes: []
    },
    {
      category: 'table',
      name: 'tr',
      description: '표의 행',
      usage: 'table',
      example: '<tr>\n  <td>짜장면</td>\n  <td>8,000원</td>\n</tr>',
      attributes: []
    },
    {
      category: 'table',
      name: 'th',
      description: '표의 헤더 셀',
      usage: 'table',
      example: '<th>메뉴명</th>\n<th>가격</th>',
      attributes: []
    },
    {
      category: 'table',
      name: 'td',
      description: '표의 데이터 셀',
      usage: 'table',
      example: '<td>짜장면</td>\n<td>8,000원</td>',
      attributes: []
    },
    {
      category: 'table',
      name: 'thead',
      description: '표의 헤더 그룹',
      usage: 'table',
      example: '<thead>\n  <tr>\n    <th>메뉴</th>\n    <th>가격</th>\n  </tr>\n</thead>',
      attributes: []
    },
    {
      category: 'table',
      name: 'tbody',
      description: '표의 본문 그룹',
      usage: 'table',
      example: '<tbody>\n  <tr>\n    <td>짜장면</td>\n    <td>8,000원</td>\n  </tr>\n</tbody>',
      attributes: []
    },

    // 기타 태그
    {
      category: 'other',
      name: 'div',
      description: '블록 레벨 컨테이너 요소',
      usage: 'layout',
      example: '<div class="menu-item">\n  <h3>짜장면</h3>\n  <p>설명</p>\n</div>',
      attributes: []
    },
    {
      category: 'other',
      name: 'iframe',
      description: '다른 HTML 문서를 포함하는 요소',
      usage: 'media',
      example: '<iframe src="https://www.google.com/maps/embed..." width="600" height="400"></iframe>',
      attributes: ['src', 'width', 'height', 'frameborder']
    },
    {
      category: 'other',
      name: 'code',
      description: '인라인 코드를 표시하는 요소',
      usage: 'text',
      example: '<p>HTML에서 <code>&lt;h1&gt;</code> 태그는 제목을 만듭니다.</p>',
      attributes: []
    },
    {
      category: 'other',
      name: 'pre',
      description: '서식이 있는 텍스트를 표시하는 요소',
      usage: 'text',
      example: '<pre>\n  function hello() {\n    console.log("Hello");\n  }\n</pre>',
      attributes: []
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'structure', name: '문서 구조', icon: '🏗️' },
    { id: 'text', name: '텍스트', icon: '📝' },
    { id: 'list', name: '목록', icon: '📝' },
    { id: 'media', name: '미디어', icon: '🎬' },
    { id: 'semantic', name: '시맨틱', icon: '🏷️' },
    { id: 'form', name: '폼', icon: '📋' },
    { id: 'table', name: '테이블', icon: '📊' },
    { id: 'other', name: '기타', icon: '🔧' }
  ];

  const filteredTags = htmlTags.filter(tag => {
    const matchesSearch = tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tag.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tag.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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
              <span className="text-secondary-700">HTML 태그 완벽 가이드</span>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                🏗️ HTML 태그 완벽 가이드
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                모든 HTML 태그의 사용법과 예제를 한눈에 확인하세요
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  4.9점 (1,234개 평가)
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {htmlTags.length}개 태그
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
                placeholder="태그명 또는 설명으로 검색..."
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

        {/* Tags Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTags.map((tag, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-secondary-900">
                      <code className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                        &lt;{tag.name}&gt;
                      </code>
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === tag.category)?.icon}
                    </Badge>
                  </div>
                  <p className="text-sm text-secondary-600 mt-2">
                    {tag.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Usage Badge */}
                    <Badge variant="secondary" className="text-xs">
                      {tag.usage}
                    </Badge>

                    {/* Attributes */}
                    {tag.attributes.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-secondary-700 mb-2">
                          주요 속성:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {tag.attributes.map((attr, i) => (
                            <code key={i} className="text-xs bg-secondary-100 px-2 py-1 rounded">
                              {attr}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Example */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-secondary-700">
                          예제:
                        </h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(tag.example)}
                          className="h-6 w-6 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      <pre className="text-xs bg-secondary-50 p-3 rounded overflow-x-auto whitespace-pre-wrap">
                        {tag.example}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredTags.length === 0 && (
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
              전체 태그 보기
            </Button>
          </div>
        )}

        {/* HTML Best Practices */}
        <section className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📋 HTML 작성 모범 사례</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">✅ 좋은 습관</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• 시맨틱 태그를 사용하세요 (header, nav, main, footer)</li>
                    <li>• 이미지에는 항상 alt 속성을 추가하세요</li>
                    <li>• 적절한 제목 태그 순서를 지키세요 (h1 → h2 → h3)</li>
                    <li>• 들여쓰기를 일관되게 사용하세요</li>
                    <li>• 닫는 태그를 잊지 마세요</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">❌ 피해야 할 것</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• div나 span만 사용하지 마세요</li>
                    <li>• 제목 태그를 스타일링 용도로 사용하지 마세요</li>
                    <li>• 필수 속성(alt, href 등)을 생략하지 마세요</li>
                    <li>• 너무 많은 중첩을 피하세요</li>
                    <li>• 인라인 스타일은 최소화하세요</li>
                  </ul>
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
                  <Link href="/guide/css-layout">
                    <div>
                      <div className="font-medium">CSS 레이아웃</div>
                      <div className="text-sm text-secondary-600">HTML 구조에 스타일 적용</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/guide/responsive">
                    <div>
                      <div className="font-medium">반응형 디자인</div>
                      <div className="text-sm text-secondary-600">모바일 친화적 HTML</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto p-4">
                  <Link href="/learning/html">
                    <div>
                      <div className="font-medium">HTML 실습</div>
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

export default HTMLTagsGuide; 