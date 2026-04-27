/**
 * 전국통합식품영양성분정보(가공식품) API 관련 상수
 * 출처: 공공데이터포털 (data.go.kr)
 */

/** 공공데이터포털 식품영양성분 API 기본 URL */
export const FOOD_API_BASE_URL =
  "https://api.data.go.kr/openapi/tn_pubr_public_nutri_process_info_api";

/** 과자류·빵류 또는 떡류 대분류 코드 */
export const FOOD_LV3_SNACK_CODE = "01";

/** 기본 페이지당 항목 수 */
export const DEFAULT_PAGE_SIZE = 20;

/** 최대 페이지당 항목 수 */
export const MAX_PAGE_SIZE = 100;

/** API 요청 타임아웃 (밀리초) */
export const FOOD_API_TIMEOUT_MS = 10_000;

/** 공공데이터 API 정상 응답 코드 */
export const FOOD_API_SUCCESS_CODE = "00";
