
import ChatBar from "@components/ChatBar";
import Message from "@lib/components/Message/Message";
import { Box, Flex } from "@radix-ui/themes";
import type {Source} from '@store'

const tempContent = `
<h2 style="text-align: center; margin-bottom: 20px;">The Beauty of Nature</h2>
    <p>
        <strong>Nature</strong>, in its boundless beauty and diversity, offers a sanctuary for the soul and a feast for the senses. The serene tranquility of a forest, the rhythmic crashing of ocean waves, and the vibrant hues of a sunset all serve as reminders of the world's inherent magnificence. Each element, from the smallest flower to the tallest mountain, contributes to a tapestry of wonder that inspires awe and reflection.
    </p>
    <p style="margin-top: 15px;">
        <em>Embracing nature</em> not only nurtures our physical well-being but also provides a profound connection to the earth and a deeper appreciation for the intricate balance of life.
    </p>
    <h3 style="color: #4CAF50; margin-top: 25px;">Reasons to Appreciate Nature:</h3>
    <ul style="margin-left: 20px; margin-bottom: 20px;">
        <li>Stress relief and relaxation</li>
        <li>Improved mental health</li>
        <li>Enhanced creativity and inspiration</li>
        <li>Physical fitness through outdoor activities</li>
    </ul>
    <h3 style="color: #4CAF50; margin-bottom: 10px;">Interesting Facts</h3>
    <table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
            <tr>
                <th style="padding: 8px; background-color: #f2f2f2;">Fact</th>
                <th style="padding: 8px; background-color: #f2f2f2;">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 8px;">Forests</td>
                <td style="padding: 8px;">Cover about 31% of Earth's land area</td>
            </tr>
            <tr>
                <td style="padding: 8px;">Oceans</td>
                <td style="padding: 8px;">Contain 97% of Earth's water</td>
            </tr>
            <tr>
                <td style="padding: 8px;">Deserts</td>
                <td style="padding: 8px;">Receive less than 250 mm of rain per year</td>
            </tr>
        </tbody>
    </table>
`
const tempSourceA: Source = {
      id: '1',
    sourceType: 'Slack',
    contentType: 'Slack',
    title: 'Slack Message',
    link: 'https://google.com',
}

const tempSources = [tempSourceA, tempSourceA, tempSourceA, tempSourceA, tempSourceA, tempSourceA, tempSourceA, tempSourceA]
const Chat = () => {
    return (<Flex height='91%' direction='column' align="center" >
            <Flex flexGrow='1' overflowY='scroll' direction='column' align='center'>
                <Flex gap='3' direction='column' width='60%' justify='end' style={{marginTop: 'auto'}}>
                    <Flex justify='end'>
                        <Message sender="User" content={tempContent} sources={tempSources} sessionID="1" id="1" timestamp="now" />
                    </Flex>
                    {/* <Flex justify='start'>
                        <Message sender="Assistant" content={tempContent} sources={tempSources} sessionID="1" id="1" timestamp="now" />
                    </Flex> */}
                </Flex>
            </Flex>
        <Flex width="664px" style={{padding: '16px 0 var(--space-5) 0'}}>
            <ChatBar />
        </Flex>
    </Flex>);
}
 
export default Chat;