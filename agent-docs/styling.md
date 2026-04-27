# 스타일링 규칙 (Tailwind CSS v4 + shadcn/ui)

> Tailwind CSS v4와 shadcn/ui 기반의 스타일링 규칙입니다.

---

## 기본 원칙

- Tailwind CSS 유틸리티 클래스를 기본 스타일링 방식으로 사용
- shadcn/ui 컴포넌트를 UI 빌딩 블록으로 활용
- 인라인 스타일(`style={{}}`) 사용 최소화
- 매직 넘버 지양 → Tailwind 디자인 토큰 및 CSS 커스텀 프로퍼티 활용

---

## Tailwind CSS 규칙

### 클래스 정렬 순서

레이아웃 → 박스 모델 → 타이포그래피 → 비주얼 → 기타 순서로 작성한다.

```tsx
// ✓ 권장 순서
<div className="flex items-center gap-4 p-4 text-sm text-gray-700 bg-white rounded-lg shadow-md" />
```

### 반응형 디자인

모바일 퍼스트로 작성하고, 큰 화면에 대한 스타일을 브레이크포인트로 추가한다.

```tsx
// ✓ 모바일 퍼스트
<div className="flex flex-col md:flex-row lg:gap-8" />
```

### 조건부 클래스

`tailwind-merge`를 사용하여 클래스를 안전하게 병합한다.

```typescript
import { twMerge } from 'tailwind-merge';

const buttonClass = twMerge(
  'px-4 py-2 rounded-lg',
  isActive && 'bg-blue-500 text-white',
  isDisabled && 'opacity-50 cursor-not-allowed',
);
```

### 금지 사항

```tsx
// ✕ 매직 넘버
<div className="w-[347px] mt-[13px]" />

// ✓ 디자인 토큰 활용
<div className="w-full max-w-sm mt-3" />
```

---

## shadcn/ui 규칙

### 컴포넌트 활용

- 기본 UI 요소(Button, Input, Dialog 등)는 shadcn/ui 컴포넌트를 우선 사용
- 커스터마이징이 필요하면 shadcn/ui 컴포넌트를 확장하여 사용
- 직접 구현하기 전에 shadcn/ui에 해당 컴포넌트가 있는지 먼저 확인

### 변형(Variants) 활용

```tsx
// ✓ variant prop으로 스타일 분기
<Button variant="destructive" size="sm">삭제</Button>

// ✕ 직접 클래스 오버라이드
<Button className="bg-red-500 text-white text-sm px-3 py-1">삭제</Button>
```

---

## 아이콘

- Lucide React 라이브러리를 사용
- 아이콘 크기는 Tailwind 유틸리티 클래스로 지정

```tsx
import { MessageCircle } from 'lucide-react';

<MessageCircle className="size-5 text-gray-500" />
```
