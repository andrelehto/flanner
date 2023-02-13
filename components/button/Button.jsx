import buttonStyle from 'components/button/Button.module.scss';

const Button = () => {
    return (
        <button className={buttonStyle.button}>
            <span className={buttonStyle.label}>button</span>
        </button>
    )
};

export default Button;