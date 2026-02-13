export default function handleOnlyText(text: string = "", limit: number): string {
  let admit = "qwertyuiopasdfghjklñzxcvbnm ";
  //@ts-ignore
  admit = admit.concat(admit.toUpperCase()).split("");

  const clean = text
    .split("")
    .map((t) => (admit.indexOf(t) !== -1 ? t : null))
    .filter((t): t is string => t !== null) // type guard para TS
    .join("");

  const sliced = clean.slice(0, clean.length > limit ? limit : clean.length);

  return sliced.length > 0 ? sliced : " ";
}
