const ConditionalWrap = ({ condition, wrap, children }: any) => (
  condition ? wrap(children) : children
);

export default ConditionalWrap;
