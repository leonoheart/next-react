import { Button } from 'antd';
import Link from 'next/link';

export default () => {
  return (
    <>
      <Link href="/a">
        <Button >A</Button>
      </Link>
      <Link>
        <Button href="/b">B</Button>
      </Link>
    </>
  )
}