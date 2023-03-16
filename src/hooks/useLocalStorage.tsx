// import { useState, useEffect } from 'react';

// export const useLocalStorage = <T,>(key: string, initialValue: T ) => {
//     const [value, setValue] = useState<T>();
//     const jsonValue = localStorage.getItem(key);

//     if(jsonValue != null) {
//         const parsedValue = JSON.stringify(jsonValue);
//         setValue(parsedValue);
//     }
// }