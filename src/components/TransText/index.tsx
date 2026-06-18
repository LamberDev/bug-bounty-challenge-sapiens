import React from "react";
import { Trans } from "react-i18next";

/**
 * Define the inline tags we use inside translation strings once, here, so any
 * rich i18n text renders as real markup instead of being escaped to literal
 * text. Centralizing this keeps callers
 * declarative (DRY) and gives the mapping a single owner (SRP).
 */
const defaultComponents: { readonly [tagName: string]: React.ReactElement } = {
  b: <b />,
  strong: <strong />,
  i: <i />,
  em: <em />
};

type TransProps = ComponentProps<typeof Trans>;
type TransTextProps = TransProps & Required<Pick<TransProps, "i18nKey">>;

/**
 * Renders a translated string that may contain inline markup (e.g. <b>, <i>).
 */
const TransText = ({
  ns = "app",
  components,
  ...rest
}: TransTextProps): React.ReactElement => {
  const mergedComponents = Array.isArray(components)
    ? components
    : { ...defaultComponents, ...components };

  return <Trans ns={ns} components={mergedComponents} {...rest} />;
};

export default TransText;
