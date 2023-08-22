import { useState } from "react";
import "./FilterButton.style.scss";

interface FilterButtonProps {
  title: string;
}

export default function FilterButton(props: FilterButtonProps) {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <button
      className={`filter-button ${enabled ? "active" : ""}`}
      onClick={() => setEnabled((enabled) => !enabled)}
    >
      <span>{props.title}</span>
    </button>
  );
}
