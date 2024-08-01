"use client"
import { formHandlerAction } from "@/app/_actions/formhandle"
import { StringMap } from "@/app/_types/deal"
import { useState } from "react"

const DealForm = () => {

    const [error, setErrors] = useState<StringMap>({})

    const handleFormSubmit = async (formData: FormData) => {
        const { errors, successMsg } = await formHandlerAction(formData)
        errors && setErrors(errors)
    }

    return (
        <form className="w-full" action={handleFormSubmit}>
            <div className="flex flex-col gap-y-4">
                <div>
                    <label className=" block" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full p-2 rounded-md text-gray-900"
                        required
                        title="Please enter a valid name"
                    />
                    {
                        error?.name && (
                            <small className="text-red-400" >{error.name}</small>
                        )
                    }
                </div>
                <div>
                    <label className=" block" htmlFor="link">
                        Link
                    </label>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        className="w-full p-2 rounded-md text-gray-900"
                    />
                    {
                        error?.link && (
                            <small className="text-red-400" >{error.link}</small>
                        )
                    }
                </div>
                <div>
                    <label className=" block" htmlFor="coupen">
                        Coupen
                    </label>
                    <input
                        type="text"
                        name="coupen"
                        id="coupen"
                        className="w-full p-2 rounded-md text-gray-900"
                    />
                    {
                        error?.coupen && (
                            <small className="text-red-400" >{error.coupen}</small>
                        )
                    }
                </div>
                <div>
                    <label className=" block" htmlFor="discount">
                        Discount
                    </label>
                    <input
                        type="text"
                        name="discount"
                        id="discount"
                        className="w-full p-2 rounded-md text-gray-900"
                    />
                    {
                        error?.discount && (
                            <small className="text-red-400" >{error.discount}</small>
                        )
                    }
                </div>
                <button>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default DealForm
