import Reset from '../components/Reset';

const ResetPage = props => (
    <div>
        <p>Reset Your Password {props.query.resetToken}</p>
        <Reset resetToken={props.query.resetToken} />
    </div>
);

export default ResetPage;

//props.query.resetToken is coming as a parameter from page.