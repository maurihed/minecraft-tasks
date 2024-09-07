import { ReactNode } from "react";

type Props = { children: ReactNode };

const Title = ({ children }: Props) => {
  return (
    <div className="mb-2">
      <h3 className="text-xl">{children}</h3>
    </div>
  );
};

const Body = ({ children }: Props) => {
  return <div>{children}</div>;
};

const Card = ({ children }: Props) => {
  return <div className="p-4 border rounded-lg border-gray-300">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;

export default Card;
