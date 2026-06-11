import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Search } from "lucide-react"
import { useState } from "react"

import { SnackActionGroup, SnackButton, SnackMoreButton } from "./button"

const variants = ["primary", "secondary"] as const
const sizes = ["sm", "md", "lg", "icon"] as const
const moreButtonDemoItems = [
  "초코파이",
  "새우깡",
  "꼬북칩",
  "허니버터칩",
  "마가렛트",
  "오징어땅콩",
  "홈런볼",
  "빈츠",
] as const

function SnackMoreButtonListDemo() {
  const [visibleCount, setVisibleCount] = useState(4)
  const visibleItems = moreButtonDemoItems.slice(0, visibleCount)
  const hasMore = visibleCount < moreButtonDemoItems.length

  return (
    <section className="flex w-72 flex-col gap-4" aria-label="더보기 버튼 목록 확장 예시">
      <ul role="list" className="flex flex-col gap-2">
        {visibleItems.map((item) => (
          <li
            key={item}
            role="listitem"
            className="border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900"
          >
            {item}
          </li>
        ))}
      </ul>
      {hasMore ? (
        <SnackMoreButton
          onClick={() => {
            setVisibleCount((currentCount) =>
              Math.min(currentCount + 4, moreButtonDemoItems.length)
            )
          }}
        />
      ) : (
        <p role="status" className="text-center text-sm text-zinc-600">
          모든 항목을 불러왔습니다
        </p>
      )}
    </section>
  )
}

const meta = {
  title: "Shared/UI/Snack/Button",
  component: SnackButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    size: {
      control: "select",
      options: sizes,
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    children: "확인",
  },
} satisfies Meta<typeof SnackButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "확인",
    variant: "primary",
    size: "md",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <SnackButton variant="primary">확인</SnackButton>
      <SnackButton variant="secondary">초기화</SnackButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {sizes.map((size) => (
        <SnackButton key={size} size={size} aria-label={size === "icon" ? "검색" : undefined}>
          {size === "icon" ? <Search /> : `${size} 버튼`}
        </SnackButton>
      ))}
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <SnackButton>기본</SnackButton>
      <SnackButton disabled>비활성</SnackButton>
      <SnackButton variant="secondary" disabled>
        초기화 불가
      </SnackButton>
    </div>
  ),
}

export const Icon: Story = {
  args: {
    children: <Search />,
    "aria-label": "검색",
    size: "icon",
    variant: "secondary",
  },
}

export const SingleAction: Story = {
  render: () => (
    <SnackActionGroup mode="single" aria-label="단일 액션 버튼 예시">
      <SnackButton fullWidth variant="primary" size="lg">
        선택 완료
      </SnackButton>
    </SnackActionGroup>
  ),
  parameters: {
    controls: {
      disable: true,
    },
  },
}

export const DualAction: Story = {
  render: () => (
    <SnackActionGroup mode="dual" aria-label="이중 액션 버튼 예시">
      <SnackButton fullWidth variant="secondary" size="lg">
        취소
      </SnackButton>
      <SnackButton fullWidth variant="primary" size="lg">
        저장
      </SnackButton>
    </SnackActionGroup>
  ),
  parameters: {
    controls: {
      disable: true,
    },
  },
}

export const MoreButton: Story = {
  render: () => <SnackMoreButton />,
  parameters: {
    controls: {
      disable: true,
    },
  },
}

export const WithListExpansion: Story = {
  render: () => <SnackMoreButtonListDemo />,
  parameters: {
    controls: {
      disable: true,
    },
  },
}
