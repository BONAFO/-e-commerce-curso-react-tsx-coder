export default function handleNumeric(text: string = "", limit: number): string {
  const admit = "0123456789".split("");
  const clean = text
    .split("")
    .map((t) => (admit.indexOf(t) !== -1 ? t : null))
    .filter((t): t is string => t !== null)
    .join("");

  const sliced = clean.slice(0, clean.length > limit ? limit : clean.length);

  return sliced.length > 0 ? sliced : " ";
}
