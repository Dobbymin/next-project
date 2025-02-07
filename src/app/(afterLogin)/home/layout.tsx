interface Props {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: Props) {
  return <div>{children}</div>;
}
