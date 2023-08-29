import { LoadingConteiner, CicleOne, CicleTwo } from "./styles";

export const Loading = () => {
  return (
    <LoadingConteiner aria-label="loading">
      <CicleOne>
        <CicleTwo></CicleTwo>
      </CicleOne>
    </LoadingConteiner>
  );
};
