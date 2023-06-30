import React, { useEffect, useState } from 'react';
import { ICall } from '../../types/calls';
import { Button, Divider, List, Skeleton } from 'antd';

const Calls = () => {
  const [calls, setCalls] = useState<ICall[]>([
    {
      admin: {
        _id: 'asjdghajdghhagsdj',
        name: 'Shoeb Ilyas',
        username: 'shoebilyas123',
        profilePic: 'sasd',
      },
      title: 'Call 1',
      members: [],
      url: 'https://meet.jit.si/Call1',
      ended: false,
      isLive: true,
      scheduledAt: 'as',
    },
    {
      admin: {
        _id: 'asjdghajdghhagsdj',
        name: 'Shoeb Ilyas',
        username: 'shoebilyas123',
        profilePic: 'sasd',
      },
      title: 'Call 1',
      members: [],
      url: 'https://meet.jit.si/Call1',
      ended: false,
      isLive: true,
      scheduledAt: 'as',
    },
  ]);

  const liveCalls = calls.filter((call) => call.isLive);
  const callScheduledCalls = calls.filter(
    (call) => !!call.scheduledAt && !call.isLive
  );

  useEffect(() => {
    console.log('calls', liveCalls);
  }, [calls]);

  return (
    <div className="w-full h-full p-4 bg-white">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Live Calls</h1>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={liveCalls}
          renderItem={(item: ICall) => (
            <List.Item
              actions={[
                <Button type="primary">
                  <a href="https://meet.jit.si/call1">Join</a>
                </Button>,
                <Button type="default" danger key="list-loadmore-more">
                  End
                </Button>,
              ]}
            >
              <Skeleton avatar title={false} active loading={false}>
                <List.Item.Meta
                  //   avatar={<Avatar src={item.picture.large} />}
                  title={
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-green-600 w-2 h-2"></div>
                      <a>{item.title}</a>
                    </div>
                  }
                  description={`Members Joined: ${item.members?.length}`}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>

      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Scheduled For Later
        </h1>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={liveCalls}
          renderItem={(item: ICall) => (
            <List.Item
              actions={[
                <Button type="primary">
                  <a href="https://meet.jit.si/call1">Join</a>
                </Button>,
                <Button type="default" danger key="list-loadmore-more">
                  End
                </Button>,
              ]}
            >
              <Skeleton avatar title={false} active loading={false}>
                <List.Item.Meta
                  //   avatar={<Avatar src={item.picture.large} />}
                  title={
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-gray-600 w-2 h-2"></div>
                      <a>{item.title}</a>
                    </div>
                  }
                  description={`Scheduled for ${item.scheduledAt}`}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Calls;
