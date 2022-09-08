import isLength from 'validator/lib/isLength';
import isNumeric from 'validator/lib/isNumeric';
import isEmail from 'validator/lib/isEmail';
const gstFormat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');
const pan = new RegExp(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/);

export function validateLogin(data) {
    let errors = {};
    if (!data.phone || !isNumeric(data.phone) || !isLength(data.phone, { max: 10, min: 10 })) {
        errors.phone = 'Fill Valid Phone Number'
    }
    return errors;
}

export function validateRegister(data) {
    let errors = {};
    if (!data || !data.full_name || !isLength(data.full_name, { min: 3 })) {
        errors.full_name = 'Fill Valid Name'
    }
    if (!data || !data.company_name || !isLength(data.company_name, { min: 3 })) {
        errors.company_name = 'Fill Valid Company Name'
    }
    if (!data || !data.email || !isEmail(data.email)) {
        errors.email = 'Fill Valid Email'
    }
    if (!data || !data.phone || !isNumeric(data.phone) || !isLength(data.phone, { max: 10, min: 10 })) {
        errors.phone = 'Fill Valid Phone Number'
    }
    if (!data || !data.address || !isLength(data.address, { min: 3 })) {
        errors.address = 'Fill Valid Address'
    }
    if (!data || !data.country_id || !isNumeric(data.country_id)) {
        errors.country_id = 'Choose Valid Country'
    }
    if (!data || !data.state_id || !isNumeric(data.state_id)) {
        errors.state_id = 'Choose Valid State'
    }
    if (!data || !data.city_id || !isNumeric(data.city_id)) {
        errors.city_id = 'Choose Valid City'
    }
    if (!data || !data.pin_code || !isLength(data.pin_code, { max: 6, min: 6 })) {
        errors.pin_code = 'Choose Valid Pin Code'
    }
    if (!data || !data.city_id || !isNumeric(data.city_id)) {
        errors.city_id = 'Choose Valid City'
    }
    if (!data || !data.iec_no || !isLength(data.iec_no, { max: 10, min: 10 })) {
        errors.iec_no = 'Fill Valid IEC'
    }
    if (!data || !data.gst_no || !(gstFormat.test(data.gst_no))) {
        errors.gst_no = 'Fill Valid GSTIN'
    }
    if (!data || !data.pan_no || !(pan.test(data.pan_no))) {
        errors.pan_no = 'Fill Valid PAN'
    }
    if (!data || !data.user_category_id || !isNumeric(data.user_category_id)) {
        errors.user_category_id = 'Choose Valid Category'
    }
    return errors;
}