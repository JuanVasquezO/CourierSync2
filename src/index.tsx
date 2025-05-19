// src/components/atoms/Button.tsx
export default function Home({ text }: { text: string }) {
  return (
    <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      {text}
    </button>
  );
}
