import { useState } from 'react';

type AuthUser = {
    name: string;
    email: string;
};

//initial value 와 future value 가 다를때 (null 이 될수도 AuthUser이 될수도 있을때 )  useState<AuthUser | null>(null) 식으로 선언

/*만약 로그아웃이 필요없는 상태여서 null 인 값이 없고 항상 value 가 있다면 
const [user, setUser] = useState<AuthUser>({} as AuthUser); 
로 해주고, 
<div>User name is {user.name} </div> 물음표를 붙이지 않아도 됨. ( null인 값은 존재하지 않기 때문에 )
 */

function User() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: 'subin',
            email: 'susu@su.com',
        });
    };
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email} </div>
        </>
    );
}

export default User;
