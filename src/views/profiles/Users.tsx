import {useForm} from 'react-hook-form'

export default function Profile() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>();
    
    const personal =
        <div className='flex items-center justify-center'>
            {
                <div className="grid grid-cols-6 gap-5 w-full my-5">
                    {/* part one */}
                    <div className="col-span-1 border"></div>
                    {/* part two */}
                    <div className="col-span-4 border">
                        <div className="grid grid-cols-2">
                            {/* sub-part one */}
                            <div className='w-3/4'>
                                <div className="form-group">
                                    <label htmlFor="#" className='text-gray-300 uppercase block mb-2'>Full name</label>

                                    <input type="text" id="names" placeholder='Names' className='py-4 w-full border-b outline-none border-black bg-white'
                                        {...register("name", {
                                            required: "* This field is required"
                                        })}
                                    />
                                    <div className="text-red-600 text-xs my-2">
                                        {errors.name && errors.name.message}
                                    </div>
                                </div>
                            </div>
                            {/* sub-part two */}
                            <div className='w-3/4'>
                                <div className="form-group">
                                    <label htmlFor="#" className='text-gray-300 uppercase block mb-2'>Full name</label>

                                    <input type="text" id="names" placeholder='Names' className='py-4 w-full border-b outline-none border-black bg-white'
                                        {...register("name", {
                                            required: "* This field is required"
                                        })}
                                    />
                                    <div className="text-red-600 text-xs my-2">
                                        {errors.name && errors.name.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* part three */}
                    <div className="col-span-1 border"></div>
                </div>
            }
        </div>

    return (
        <div className="block relative w-full h-auto px-11">
            <div className="bg-main px-16 py-8 h-full ">
                {personal}
            </div>
        </div>
    )
}