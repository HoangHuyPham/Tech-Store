import { Table } from "antd"

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
  ];

const UserManagement:React.FC = ()=>{
    return <>
        <div className="w-[100%] animate-fade">
                <p className="text-center p-5">Hello</p>
                <Table dataSource={dataSource} columns={columns} />
            </div>
    </>
}

export default UserManagement