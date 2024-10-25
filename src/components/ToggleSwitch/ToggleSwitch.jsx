import "./ToggleSwitch.styles.css";

const ToggleSwitch = ({ label, isChecked, onToggle }) => (
    <label className="toggle-switch">
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        {label}
    </label>
);

export default ToggleSwitch;
