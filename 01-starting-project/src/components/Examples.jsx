import TabButton from "./TabButton";
import { useState} from 'react'; // any function which is starting with "use" is called react hook
import { EXAMPLES } from '../data';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){
    const [selectedTopic, setSelectedTopic ] = useState(); // must called in top level
    function handleSelect(selectedButton){
        tabContent = selectedButton;
        setSelectedTopic(selectedButton)
    }
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      }
    
    return (
        <Section title="Example" id="examples">
            <Tabs button={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                </>
            }>           
            
            {!selectedTopic ?  <p>{tabContent}</p> : (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
                </div> )
            }{ tabContent }
            </Tabs>         
        </Section>
    );
}
