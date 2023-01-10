import {heightPercentage, widthPercentage} from '@utils/responsive_size';
import React from 'react';
import styled from 'styled-components/native';
import {AssayDrawerItem} from './assay_drawer_Item';
const _View = styled.View`
  backgroud-color: red;
  opacity: 1;
  z-index: 9;
  position: absolute;
  width: ${widthPercentage(360)}px;
  height: ${heightPercentage(833)}px;
`;

const TitleView = styled.View`
  flex-direction: row;
`;
const TextView1 = styled.View`
  width: 60px;
  height: 80px;
  background-color: pink;
`;
const TextView2 = styled.View`
  top: 10px;
  padding: 5px;
  width: 50px;
  height: 50px;
  background-color: pink;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;
const Section = styled.View`
  padding: 0px;
  background-color: pink;
  opacity: 0.6;
  width: 60px;
  height: ${heightPercentage(750)}px;
`;

export const EnableAssayDrawer = ({
  drawerList,
  title,
}: {
  drawerList: Array<Parameters<typeof AssayDrawerItem>[0]>;
  title: string;
}) => (
  <_View>
    <TitleView>
      <TextView1>
        <Title>문항</Title>
      </TextView1>
      <TextView2>
        <Title>{title}</Title>
      </TextView2>
    </TitleView>
    <Section>
      {drawerList.map(data => (
        <AssayDrawerItem key={'Drawer' + data.label} {...data} />
      ))}
    </Section>
  </_View>
);
