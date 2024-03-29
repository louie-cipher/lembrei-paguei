import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight || 0}px;
	width: 90%;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 24px;
	font-weight: bold;
`;
