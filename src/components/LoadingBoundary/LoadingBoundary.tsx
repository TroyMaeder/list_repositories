import { FC } from "react";

interface Props {
  loading: boolean;
  children: any;
}

const LoadingBoundary: FC<Props> = ({ children, loading }) => {
  if (loading) {
    return (
      <div
        style={{
          minHeight: window.innerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingBoundary;
