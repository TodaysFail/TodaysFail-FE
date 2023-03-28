import styled from 'styled-components';
import { ReactComponent as LogoutBackgroundSVG } from '../../assets/logout-background.svg';
import { ReactComponent as LogoutIconSVG } from '../../assets/logout-icon.svg';
import { ReactComponent as LogoutBackgroundHoverSVG } from '../../assets/logout-background-hover.svg';
import { ReactComponent as LogoutIconHoverSVG } from '../../assets/logout-icon-hover.svg';

export default function Logout({ isHover }) {
  return (
    <>
      {isHover ? (
        <LogoutContainer>
          <LogoutBackgroundHover />
          <LogoutIconHover />
        </LogoutContainer>
      ) : (
        <LogoutContainer>
          <LogoutBackground />
          <LogoutIcon />
        </LogoutContainer>
      )}
    </>
  );
}

const LogoutContainer = styled.div`
  position: relative;
`;

const LogoutBackground = styled(LogoutBackgroundSVG)`
  position: absolute;
  bottom: 20px;
  left: 145px;
  cursor: pointer;
`;

const LogoutIcon = styled(LogoutIconSVG)`
  position: absolute;
  bottom: 25px;
  left: 151px;
  cursor: pointer;
`;

const LogoutBackgroundHover = styled(LogoutBackgroundHoverSVG)`
  position: absolute;
  bottom: 20px;
  left: 145px;
  cursor: pointer;
`;

const LogoutIconHover = styled(LogoutIconHoverSVG)`
  position: absolute;
  bottom: 25px;
  left: 151px;
  cursor: pointer;
`;
