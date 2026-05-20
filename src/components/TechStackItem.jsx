import Icon from "./Icon";

export default function TechStackItem({ title }) {
  return (
    <li>
      <div className="tech-stack-item">
        <Icon icon="fa-solid fa-caret-right" />
        {title}
      </div>
    </li>
  );
}
