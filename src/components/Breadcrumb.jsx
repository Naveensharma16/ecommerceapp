// eslint-disable-next-line react/prop-types
export default function Breadcrumb({ title }) {
  // component to show the hero banner for pages like products and categories
  return (
    <div className="breadcrumb-container">
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
}
