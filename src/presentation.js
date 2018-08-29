import React from 'react';
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  S,
  Appear,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { colours, fontFamilies } from './theme';
import { buildCodeSlide } from './utils';

/* eslint-disable import/no-webpack-loader-syntax */
import plainPropertyComponentExample from '!raw-loader!./assets/plain-property-component.example';
import plainPropertyTemplateExample from '!raw-loader!./assets/plain-property-template.example';
import observablePropertyComponentExample from '!raw-loader!./assets/observable-property-component.example';
import observablePropertyTemplateExample from '!raw-loader!./assets/observable-property-template.example';
import booleanComponentExample from '!raw-loader!./assets/boolean-component.example';
import booleanNgIfTemplateExample from '!raw-loader!./assets/boolean-ngif-template.example';
import booleanPsLetTemplateExample from '!raw-loader!./assets/boolean-pslet-template.example';
/* eslint-enable import/no-webpack-loader-syntax */

require('normalize.css');

const theme = createTheme(colours, fontFamilies);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide>
          <Heading
            size={3}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
            bold
          >
            Exposing Observable Values in Templates Using{' '}
            <S type="bold" textColor="blue">
              psLet
            </S>
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="secondary"
            textAlign="left"
            size={5}
          >
            Igor Barsi
          </Text>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1.2} textColor="secondary">
            How do we get values from our{' '}
            <S type="bold" textColor="blue">
              component
            </S>{' '}
            into our{' '}
            <S type="bold" textColor="blue">
              template
            </S>
            ?
          </Heading>
        </Slide>
        {buildCodeSlide({
          source: plainPropertyComponentExample,
          title: 'Plain Old Property (Component)',
        })}
        {buildCodeSlide({
          source: plainPropertyTemplateExample,
          title: 'Plain Old Property (Template)',
          lang: 'html',
        })}
        <Slide>
          <Heading size={1} textColor="secondary">
            🎉
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={1.2} textColor="secondary">
            How do we get{' '}
            <S type="bold" textColor="blue">
              observable
            </S>{' '}
            values from our component into our template?
          </Heading>
        </Slide>
        {buildCodeSlide({
          source: observablePropertyComponentExample,
          title: 'Observable Property (Component)',
        })}
        {buildCodeSlide({
          source: observablePropertyTemplateExample,
          title: 'Observable Property (Template)',
          lang: 'html',
        })}
        <Slide>
          <Heading size={1} textColor="secondary">
            🎊
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} lineHeight={1} textColor="secondary">
            What if my value is{' '}
            <S type="bold" textColor="blue">
              falsy
            </S>
            ?
          </Heading>
        </Slide>
        {buildCodeSlide({
          source: booleanComponentExample,
          title: 'Boolean Observable Property (Component)',
          textSize: 18,
        })}
        {buildCodeSlide({
          source: booleanNgIfTemplateExample,
          title: 'Boolean Observable Property (Template)',
          textSize: 22,
          lang: 'html',
        })}
        <Slide>
          <Heading size={1} textColor="secondary">
            🤔
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            What are our options?
          </Heading>
          <List>
            <Appear>
              <ListItem padding="10px 0">
                Define the string in its own observable 😕
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px 0">
                Subscribe inside the click handler 😥
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px 0">
                Define a duplicated #else template 😫
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px 0">???</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            <S type="bold" textColor="blue">
              psLet
            </S>{' '}
            to the rescue! 🚀
          </Heading>
        </Slide>
        {buildCodeSlide({
          source: booleanPsLetTemplateExample,
          title: 'Boolean Observable Property (Revised)',
          textSize: 22,
          lang: 'html',
        })}
        <Slide>
          <Heading size={1} textColor="secondary">
            🍻
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            When should I use it?
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={34} padding="10px 0">
                Expose an observable's value,{' '}
                <S type="bold" textColor="blue">
                  regardless of truthiness
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={34} padding="10px 0">
                Render your template{' '}
                <S type="bold" textColor="blue">
                  unconditionally
                </S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={34} padding="10px 0">
                Communicate{' '}
                <S type="bold" textColor="blue">
                  semantic meaning
                </S>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            Caveats
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={34} padding="10px 0">
                <S type="bold">psLet</S> is{' '}
                <S type="bold" textColor="blue">
                  not
                </S>{' '}
                a replacement for <S type="bold">ngIf</S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={34} padding="10px 0">
                Your template will{' '}
                <S type="bold" textColor="blue">
                  always
                </S>{' '}
                render
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary" bold>
            That's it!
          </Heading>
          <Heading size={2} margin="50px 0 0" textColor="secondary">
            👋
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
