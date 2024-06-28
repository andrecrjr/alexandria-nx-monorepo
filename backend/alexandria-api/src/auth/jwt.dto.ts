export type JwtDTO = {
  sub: number;
  email: string;
};

export interface IRequestJWT {
  user: JwtDTO;
}
