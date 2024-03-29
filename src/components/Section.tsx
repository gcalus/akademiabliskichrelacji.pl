/* eslint-disable prefer-arrow-callback */
import { ReactNode, forwardRef, ForwardedRef } from "react";

type ISectionProps = {
  title?: string | JSX.Element;
  description?: string | ReactNode;
  className?: string;
  id?: string;
  children?: ReactNode;
};

const Section = forwardRef(function Section(
  props: ISectionProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      id={props.id}
      className={`max-w-screen-xl mx-auto px-3 ${
        props.className ? props.className : "py-16"
      }`}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-2xl md:text-4xl text-gray-900 font-bold">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div
              className={`${
                props.title && "mt-4"
              } text-xl text-left max-w-prose mx-auto`}
            >
              {props.description}
            </div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
});

export { Section };
