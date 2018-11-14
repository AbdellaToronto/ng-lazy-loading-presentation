import React from 'react';
import { List, ListItem, Slide, Heading, Appear } from 'spectacle';


export const QuestionSlide = ({question, additionalLines}) => <Slide>
  <Heading size={4} lineHeight={1.2} textColor="secondary">
    {question}
  </Heading>
  {additionalLines && <List>
    {additionalLines.map((line) => <ListItem>{line}</ListItem>)}
  </List>}
</Slide>;


export const AnswerSlide = ({answers}) => <Slide>
  <List>
    {answers.map(answer => <Appear><ListItem>{answer}</ListItem></Appear>)}
  </List>
</Slide>;


export const IFrameSlide = url =>
  class FPMapCode extends React.Component {
    render() {
      return (
        <Slide {...this.props}>
          <iframe frameborder="0" width="100%" height="600px" src={url} />
        </Slide>
      );
    }
  };