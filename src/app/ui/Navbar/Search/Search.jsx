"use client"
import React, { useEffect, useState } from 'react'
import "./Search.scss"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
function Search() {

    const [inputValue, setInputValue] = useState("");
    const [showList, setShowList] = useState(false);
    const handleInputClick = () => {
        // setShowList(true);
    };

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const router = useRouter();
    const pathname = usePathname();
    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
        console.log(e.target.value, "22222222", inputValue)
        setInputValue(e.target.value)
        setShowList(true)
        if (e.target.value) {
            e.target.value.length > 2 && params.set("usersname", e.target.value);
            getAllUsers(e.target.value)
            // replace(`/dashboard/user/${params}`);
        } else {
            // params.delete("users");
            setShowList(false);
            // router.push("/dashboard")
        }
        // replace(`${pathname}/users/${params}`);
    }, 200);

    const handleKeyPress = (event) => {
    };


    const [allUsers, setAllUsers] = useState([])

    const getAllUsers = async (value) => {
        const res = await fetch(`/api/searchuser/${value}`, {
            cache: "no-store"
        });
        try {
            const result = await res.json()
            if (result.returnLst !== 0) {
                setAllUsers(result.returnLst)
            } else {
                setAllUsers([])
            }
        }
        catch (err) {
            console.log(err)
        }
    };

    const onBlur = () => {
        setTimeout(() => {
            setShowList(false)
        }, 300)
    }
    const onFocus = () => {
        setShowList(true)
    }

    const visibleStyle = {
        padding: "5px 5px 5px 5px",
        boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
    }

    const resetInput = () => {
        setShowList(false)
        console.log(inputValue)
        // setInputValue("")
    }

    const selectUser = (ele) => {
        const userId = ele._id
        router.push(`/userinfo/${userId}`)
    }

    return (
        <div className='search'>
            <div className='searchCard' style={showList ? visibleStyle : null}>
                <div className="form" >
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" onBlur={onBlur} onFocus={onFocus} placeholder="Type your text" onClick={handleInputClick}
                        type="text" onChange={(e) => handleSearch(e)} onKeyDown={(e) => handleKeyPress(e)} />
                    <button className="reset" type="reset" onClick={resetInput}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {showList && <div className='list'>
                    <div className='results'>
                        {allUsers?.map((ele, index) => {
                            return (
                                <div className='userInfo' key={index} onClick={() => selectUser(ele)}>
                                    <img src={ele.profilePic} alt="" />
                                    <div>{ele.username}</div>
                                </div>
                            )
                        })}
                        {allUsers && allUsers.length === 0 && <div className='no_result_found'>No results found</div>}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Search