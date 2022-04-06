import DownArrow from "./IconComponents/DownArrow";
import UpArrow from "./IconComponents/UpArrow";
import FacebookIcon from "./IconComponents/FacebookIcon";
import InstagramIcon  from "./IconComponents/InstagramIcon";
import TwitterIcon from "./IconComponents/TwitterIcon";
import YoutubeIcon from "./IconComponents/YoutubeIcon";
import { PropTypes } from 'prop-types';

const icons = {
    downArrow: DownArrow,
    upArrow: UpArrow,
    facebookIcon: FacebookIcon,
    instagramIcon: InstagramIcon,
    twitterIcon: TwitterIcon,
    youTubeIcon: YoutubeIcon,
}


const Icon = ({ iconName, iconClassName }) => {
    const IconComponent = icons[iconName];

    if(!IconComponent) throw new Error(`please use an icon from the existing ones: ${{...icons}}`)

    return (
        <IconComponent className={iconClassName} />
    )
}


Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconClassName: PropTypes.string.isRequired,
}
export default Icon;