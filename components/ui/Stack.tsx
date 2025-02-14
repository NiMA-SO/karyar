import React, { ReactNode } from "react";
interface Props {
  paragraph?: string;
  title?: string;
  idLink?: string;
  children?: ReactNode;
}
const Stack = ({ paragraph, title, idLink, children }: Props) => {
  return (
    <div
      id={idLink}
      className="block container mx-auto my-3 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto rounded-xl lg:border lg:bg-gray-200 p-4 lg:dark:bg-zinc-800/30"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-semibold leading-10 text-gray-700 dark:text-gray-400">
        {paragraph}
      </p>
      <div className="flex flex-row justify-between flex-wrap ">{children}</div>
    </div>
  );
};

export default Stack;
