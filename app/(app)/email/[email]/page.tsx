'use client';

import { showSuccessPopup, useStore } from '@lib/store';
import { EnvelopeClosedIcon, PlusIcon } from '@radix-ui/react-icons';
import {
  Button,
  Checkbox,
  Dialog,
  Flex,
  Heading,
  RadioCards,
  Select,
  Separator,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const EmailPage = () => {
  const [emails, addEmailHandle] = useStore((s) => [s.emailHandles, s.addEmailHandle]);
  const router = useParams();
  const { pageEmail } = router;

  useEffect(() => {
    setCurrentEmail(pageEmail);
  }, []);

  const [currentEmail, setCurrentEmail] = useState(pageEmail);
  const addEmailRef = useRef<HTMLInputElement>(null);
  const timeDelayChoiceRef = useRef<HTMLInputElement>(null);
  const timeDelaySliderRef = useRef<HTMLInputElement>(null);
  const minTimeDelaySliderRef = useRef<HTMLInputElement>(null);
  const maxTimeDelaySliderRef = useRef<HTMLInputElement>(null);
  const [variableTime, setVariableTime] = useState(0);
  const [timeDelayAmount, setTimeDelayAmount] = useState(5);
  const [minTimeDelayAmount, setMinTimeDelayAmount] = useState(5);
  const [maxTimeDelayAmount, setMaxTimeDelayAmount] = useState(15);

  return (
    <Flex style={{ padding: '40px 20px 8px 100px', flex: 1 }} gap='8'>
      <Flex direction='column' width='250px' gap='3'>
        <Heading>Linked Emails</Heading>
        <Separator />
        <Flex direction='column' width='100%' gap='2'>
          {emails.map((email, index) => (
            <Button
              size='2'
              variant={currentEmail === email.email ? 'solid' : 'soft'}
              style={{ boxShadow: 'none' }}
              color='gray'
              onClick={() => {
                setCurrentEmail(email.email);
              }}
            >
              {email.email}
            </Button>
          ))}
          <Dialog.Root>
            <Dialog.Trigger>
              <Button size='2' variant={'outline'} color='gray'>
                <PlusIcon />
                Add Email
              </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth='450px'>
              <Dialog.Title>Link Email</Dialog.Title>
              <Dialog.Description size='2' mb='4'>
                Link an email to your account to set up Cumuless GenAI auto-reply.
              </Dialog.Description>

              <Flex direction='column' gap='3'>
                <label>
                  <Flex direction='column' gap='5'>
                    <Flex direction='column'>
                      <Text as='div' size='2' mb='1' weight='bold'>
                        Enter the email you would like to link to your account.
                      </Text>
                      <TextField.Root placeholder='Email' ref={addEmailRef}>
                        <TextField.Slot>
                          <EnvelopeClosedIcon height='16' width='16' />
                        </TextField.Slot>
                      </TextField.Root>
                    </Flex>

                    <Flex direction='column'>
                      <Text as='div' size='2' mb='1' weight='bold'>
                        Type of email:
                      </Text>
                      <RadioCards.Root columns={{ initial: '1', sm: '3' }}>
                        <RadioCards.Item value='Internal'>Internal</RadioCards.Item>
                        <RadioCards.Item value='Prespect'>Prespect</RadioCards.Item>
                        <RadioCards.Item value='Current Client'>
                          Current Client
                        </RadioCards.Item>
                      </RadioCards.Root>
                    </Flex>
                  </Flex>
                </label>
              </Flex>

              <Flex gap='3' mt='4' justify='end'>
                <Dialog.Close>
                  <Button
                    color='jade'
                    onClick={() => {
                      showSuccessPopup('Linked Email Successfully!');
                      if (addEmailRef.current?.value)
                        addEmailHandle(addEmailRef.current.value);
                    }}
                  >
                    Link
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </Flex>
      <Flex
        direction='column'
        gap='3'
        style={{ flex: 1, overflow: 'scroll', height: 'inherit', paddingBottom: '100px' }}
      >
        <Heading>GenAI Reply Settings</Heading>
        <Separator />
        <Flex direction='column' gap='5'>
          <Flex direction='column' gap='2' width='500px'>
            <Flex direction='column'>
              <Heading size='3'>Email Settings</Heading>
              <Text size='1' color='gray'>
                Email classification for {currentEmail}
              </Text>
            </Flex>
            <RadioCards.Root columns={{ initial: '1', sm: '3' }}>
              <RadioCards.Item value='Internal'>Internal</RadioCards.Item>
              <RadioCards.Item value='Prespect'>Prespect</RadioCards.Item>
              <RadioCards.Item value='Current Client'>Current Client</RadioCards.Item>
            </RadioCards.Root>
          </Flex>
          <Flex direction='column' gap='2' width='500px'>
            <Flex direction='column'>
              <Heading size='3'>When I receive an email of type</Heading>
              <Select.Root defaultValue='General Interest'>
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Email Type</Select.Label>
                    <Select.Item value='General Interest'>General Interest</Select.Item>
                    <Select.Item value='Interest in Product X'>
                      Interest in Product X
                    </Select.Item>
                    <Select.Item value='Interest in Product we do not Offer'>
                      Interest in Product we do not Offer
                    </Select.Item>
                    <Select.Item value='Follow-up from Previous Request'>
                      Follow-up from Previous Request
                    </Select.Item>
                    <Select.Item value='Everything else'>Everything else</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
          <Flex direction='column' gap='2'>
            <Flex direction='column'>
              <Heading size='3'>Email Response</Heading>
              <Text size='1' color='gray'>
                Type out an email response that will be sent to the sender.
              </Text>
            </Flex>
            <TextArea
              //               placeholder={`Hey \${SENDER_NAME}, \n\nThank you for contacting [your-company] regarding our Salesforce consultancy services.

              // At [your-company], we specialize in providing comprehensive Salesforce solutions tailored to meet the unique needs of each of our clients. Our team of certified Salesforce consultants is dedicated to helping businesses like yours maximize their Salesforce investment by offering services that include:

              // Salesforce Implementation
              //     > Full-cycle Salesforce implementation to ensure a seamless integration with your existing systems and processes.
              //     > Customization and Development: Custom solutions and applications developed to address your specific business requirements.
              //     > Data Migration: Secure and efficient migration of your data to Salesforce, ensuring data integrity and minimal disruption.
              //     > Training and Support: Comprehensive training programs and ongoing support to empower your team and ensure long-term success.

              // We would love to learn more about your specific needs and discuss how we can assist you in achieving your business goals. Please let us know a convenient time for you to have a brief discussion, either over the phone or through a video call.

              // In the meantime, feel free to visit our website [your-company.com] to learn more about our services and success stories from other clients.

              // Best, \n\${YOUR_COMPANY}`}
              placeholder={`Hey \${SENDER_NAME}, \n\nType your email response here...`}
              style={{ minHeight: '450px' }}
            />
          </Flex>
          <Flex direction='column' width='400px' gap='2'>
            <Flex direction='column'>
              <Heading size='3'>Signature</Heading>
              <Text size='1' color='gray'>
                Upload a signature to be included at the end of the email response.
              </Text>
            </Flex>
            <Flex direction='column' gap='1'>
              <Button color='gray' variant='outline' style={{ width: '200px' }}>
                Upload
              </Button>
              <Text size='1' color='gray'>
                Accepted file types: .png, .jpg, .jpeg
              </Text>
            </Flex>
          </Flex>
          <Flex direction='column' gap='2' width='800px'>
            <Flex direction='column'>
              <Heading size='3'>Reply Speed</Heading>
              <Text size='1' color='gray'>
                Select how fast you'd like the response to be sent. Variable Time Delay is
                recommended
              </Text>
            </Flex>
            <RadioCards.Root
              columns={{ initial: '1', sm: '3' }}
              ref={timeDelayChoiceRef}
              onValueChange={(val) => {
                if (val === 'Variable Time Delay') setVariableTime(2);
                else if (val === 'Fixed Time Delay') setVariableTime(1);
                else setVariableTime(0);
              }}
            >
              <RadioCards.Item value='Instant'>Instant</RadioCards.Item>
              <RadioCards.Item value='Fixed Time Delay'>Fixed Time Delay</RadioCards.Item>
              <RadioCards.Item value='Variable Time Delay'>
                Variable Time Delay
              </RadioCards.Item>
            </RadioCards.Root>
          </Flex>
          {variableTime === 1 ? (
            <Flex direction='column' gap='2' width='800px'>
              <Flex direction='column'>
                <Heading size='3'>Fixed Time Delay</Heading>
                <Text size='1' color='gray'>
                  Select the time delay you'd like the response to be sent after.
                </Text>
              </Flex>
              <Flex direction='column' gap='2'>
                <input
                  type='range'
                  min='0'
                  max='59'
                  step='0.01'
                  value={timeDelayAmount}
                  ref={timeDelaySliderRef}
                  onInput={(e) => {
                    setTimeDelayAmount(
                      parseInt(timeDelaySliderRef.current?.value || '0')
                    );
                  }}
                />
                <Text size='1' color='gray'>
                  {Math.floor(timeDelayAmount)} minutes{' '}
                </Text>
              </Flex>
            </Flex>
          ) : (
            variableTime === 2 && (
              <Flex direction='column' gap='2' width='800px'>
                <Flex direction='column'>
                  <Heading size='3'>Variable Time Delay</Heading>
                  <Text size='1' color='gray'>
                    Select the range of time you'd like the response to be sent.
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Flex direction='column' gap='2'>
                    <input
                      type='range'
                      min='0'
                      max='59'
                      step='0.01'
                      value={minTimeDelayAmount}
                      ref={minTimeDelaySliderRef}
                      onInput={(e) => {
                        setMinTimeDelayAmount(
                          parseInt(minTimeDelaySliderRef.current?.value || '0')
                        );
                      }}
                    />
                    <Text size='1' color='gray'>
                      Min Delay of {Math.floor(minTimeDelayAmount)} minutes{' '}
                    </Text>
                  </Flex>
                </Flex>
                <Flex direction='column'>
                  <Flex direction='column' gap='2'>
                    <input
                      type='range'
                      min='0'
                      max='59'
                      step='0.01'
                      value={maxTimeDelayAmount}
                      ref={maxTimeDelaySliderRef}
                      onInput={(e) => {
                        setMaxTimeDelayAmount(
                          parseInt(maxTimeDelaySliderRef.current?.value || '0')
                        );
                      }}
                    />
                    <Text size='1' color='gray'>
                      Max Delay of {Math.floor(maxTimeDelayAmount)} minutes{' '}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )
          )}
          <Flex direction='column' width='500px' gap='2'>
            <Flex direction='column'>
              <Heading size='3'>Learn From My Interactions (Beta)</Heading>
              <Text size='1' color='gray'>
                Allow GenAI to learn from your interactions and improve responses over
                time.
              </Text>
            </Flex>
            <Flex direction='column' gap='1'>
              <Flex align='center' gap='2'>
                <Text size='2' weight='medium'>
                  Allow
                </Text>
                <Checkbox />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify='end'>
          <Button
            size='2'
            onClick={() => {
              showSuccessPopup('Saved!');
            }}
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EmailPage;
