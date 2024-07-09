import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onToggleAllLightsOn,
  onToggleAllLightsOff,
  ligthsCount,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onToggleAllLightsOff}
        disabled={ligthsCount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={onToggleAllLightsOn}
        disabled={ligthsCount === 8}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
