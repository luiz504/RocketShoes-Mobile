import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import colors from '../../styles/color';

export const Container = styled.View`
  background: ${colors.whiteBase};
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  max-height: 90%;
`;
export const ProductsTable = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const ProductTitle = styled.Text``;
export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;
export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;
export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.whiteContrast};
  padding: 8px;
  border-radius: 5px;
`;
export const ProductControlButton = styled.TouchableOpacity``;
export const Productamount = styled.TextInput.attrs({
  readonly: true,
  editable: false,
})`
  background: ${colors.whiteBase};
  padding: 5px;
  margin: 0px 5px;
  border: 1px solid ${colors.whiteBorder};
  border-radius: 5px;
  min-width: 52px;
  text-align: center;
  color: ${colors.black};
`;
export const ProductSubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;
export const TotalContainer = styled.View`
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  text-align: center;
  color: ${colors.greyLight};
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
`;
export const TotalAmount = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 30px;
`;
export const Checkout = styled.TouchableOpacity`
  background: ${colors.purple};
  padding: 12px;
  border-radius: 5px;
`;
export const CheckoutText = styled.Text`
  color: ${colors.whiteBase};
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyContainerText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
