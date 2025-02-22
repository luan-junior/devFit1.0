import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NavigationProps} from '../../interfaces/INavigate';

const TabBarArea = styled.SafeAreaView`
  flex-direction: row;
  background-color: #eee; /* #fff */
`;

const TabBarItem = styled.View`
  flex: 1;
  height: 65px;
  align-items: center;
`;

const TabRegular = styled.TouchableHighlight`
  align-items: center;
`;

const TabImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const TabBall = styled.TouchableHighlight`
  width: 100px;
  height: 100px;
  background-color: #3ba237;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
  margin-top: -50px;
`;

const TabBallImage = styled.Image`
  width: 40px;
  height: 40px;
`;

type CustomTabBarProps = {
  items: {
    type: string;
    text?: string;
    icon: string;
    route: string;
  }[];
};

export default ({items}: CustomTabBarProps) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TabBarArea>
      {items.map(item => (
        <TabBarItem key={item.route}>
          {item.type === 'regular' && (
            <TabRegular
              underlayColor="transparent"
              onPress={() => navigation.navigate(item.route)}>
              <>
                <TabImage source={item.icon} />
                <Text style={{color: '#000'}}>{item.text}</Text>
              </>
            </TabRegular>
          )}
          {item.type === 'big' && (
            <TabBall
              underlayColor="#00ff00"
              onPress={() => navigation.navigate(item.route)}>
              <TabBallImage source={item.icon} />
            </TabBall>
          )}
        </TabBarItem>
      ))}
    </TabBarArea>
  );
};
