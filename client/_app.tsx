import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/globals.scss';

// TODO loading画面の実装
// 全ページ共通
// 要素が配置されるまではloading画面を表示させる

// TODO サイトTOPはLPになるかも（works見た感じ）
// その場合はLP用のテンプレートとサービス用のテンプレートの出しわけが必要かと
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Template>
        <Component {...pageProps} />
      </Template>
    </>
  );
};

export default MyApp;
