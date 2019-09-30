import styled from 'styled-components/native';
import colors from '../../styles/color';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;
export const CartContainer = styled.TouchableOpacity`
  flex: 1;
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const LogoContainer = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;
export const ItemCount = styled.Text`
  position: absolute;
  color: ${colors.whiteBase};
  background: ${colors.purple};
  top: -8px;
  right: -8px;
  font-size: 12px;
  min-width: 18px;
  min-height: 18px;
  text-align: center;
  padding: 1px;
  border-radius: 9px;
  overflow: hidden;
`;
