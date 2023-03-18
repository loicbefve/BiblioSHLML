import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const SearchInvitationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  color: gray;
  padding: 200px 300px;
  text-align: center;
`;

const StyledArrow = styled(FontAwesomeIcon)`
  height: 100px;
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(-30px);
    }
    40% {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

interface IProps {
  searchInvitationMessage: string;
}
function SearchInvitation({ searchInvitationMessage }: IProps) {
  return (
    <SearchInvitationContainer>
      <StyledArrow icon={faArrowUp} />
      <h1>{searchInvitationMessage}</h1>
    </SearchInvitationContainer>
  );
}

export default SearchInvitation;
