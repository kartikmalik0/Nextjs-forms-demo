"use server";

import { dealSchema } from "../_schemas/deals";
import { DealFormState } from "../_types/deal";
import { convertZodErrors } from "../_utils/errors";

export async function formHandlerAction(
    formData: FormData
): Promise<DealFormState<undefined>> {
    const unvalidatedData = {
        name: formData.get("name"),
        link: formData.get("link"),
        coupen: formData.get("coupen"),
        discount: formData.get("discount"),
    };

    const validated = dealSchema.safeParse(unvalidatedData);

    if (!validated.success) {
        const errors = convertZodErrors(validated.error);
        return { errors };
    } else {
        return { successMsg: "Deal added successfully" };
    }
}
