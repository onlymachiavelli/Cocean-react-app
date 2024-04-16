'use client'
import { useRouter,usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import Login from './auth/login/page';
import SignUp from './auth/signup/page';

const App = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const router = useRouter();
  const pathname=usePathname();
  const handleTabChange = (newKey: string | number) => {
    router.push(`/auth/${newKey}`);
    
  };
  if(!isClient){
    return null;
  }
  useEffect(()=>{

    console.log(pathname)
  }, [])
  return (
      <main className="flex flex-col w-full">
        <Card className="max-w-full w-[340px] h-[400px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={pathname.substring(6)}
              onSelectionChange={handleTabChange} 
            >
              <Tab key="login" title="Login">
                <Login />
              </Tab>
              <Tab key="signup" title="Sign up">
                <SignUp />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </main>
  );
};

export default App;
