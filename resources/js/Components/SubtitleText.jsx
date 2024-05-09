export default function SubtitleText({ classname='', children }){
  return (
    <>
      <h2 className={`text-2xl xl:text-3xl font-bold mb-2 ` + classname}>{children}</h2>
    </>
  );
}