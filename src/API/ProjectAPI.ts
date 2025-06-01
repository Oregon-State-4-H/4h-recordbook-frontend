import { buildBaseUrl } from "@/API/base";

export enum AnimalProjectTypeEndpoints {
  Animal = "animal",
  DailyFeed = "daily-feed",
  Expense = "expense",
  Feed = "feed",
  FeedPurchase = "feed-purchase",
  Supply = "supply",
  Gain = "rate-of-gain",
  Empty = "",
}

export function EndpointByDynamicPathSuffix(subpagePathSuffix: string): string {
  console.log(subpagePathSuffix);
  switch (subpagePathSuffix) {
    case "Animal":
      return AnimalProjectTypeEndpoints.Animal;
    case "Expense":
      return AnimalProjectTypeEndpoints.Expense;
    case "Feeds":
      return AnimalProjectTypeEndpoints.Feed;
    case "Supplies":
      return AnimalProjectTypeEndpoints.Supply;
    case "Gain":
      return AnimalProjectTypeEndpoints.Gain;
  }
  return "";
}

export type AnimalKey = keyof Animal;
export type GainKey = keyof Gain;
export type DailyFeedKey = keyof DailyFeed;
export type ExpenseKey = keyof Expense;
export type FeedKey = keyof Feed;
export type FeedPurchaseKey = keyof FeedPurchase;
export type SupplyKey = keyof Supply;
export type EmptyKey = keyof Empty;

export const AnimalKeys: AnimalKey[] = [
  "animal_cost",
  "birth_date",
  "dam_breed",
  "name",
  "project_id",
  "purchase_date",
  "quality_grade",
  "sale_price",
  "sire_breed",
  "species",
  "yield_grade",
];

export const GainKeys: GainKey[] = [
  "beginning_date",
  "beginning_weight",
  "end_date",
  "end_weight",
];

export const DailyFeedKeys: DailyFeedKey[] = [];
export const ExpenseKeys: ExpenseKey[] = [];
export const FeedKeys: FeedKey[] = [];
export const FeedPurchaseKeys: FeedPurchaseKey[] = [];
export const SupplyKeys: SupplyKey[] = [];
export const EmptyKeys: EmptyKey[] = [];

export const AnimalProjectTypeKeysFromUser: { [key: string]: string[] } = {
  Animal: AnimalKeys,
  Gain: GainKeys,
  DailyFeed: DailyFeedKeys,
  Expense: ExpenseKeys,
  Feed: FeedKeys,
  FeedPurchase: FeedPurchaseKeys,
  Supply: SupplyKeys,
  Empty: EmptyKeys,
};

export function isAnimalKey(key: string): key is AnimalKey {
  return key in emptyAnimal;
}

export function isGainKey(key: string): key is GainKey {
  return key in emptyGain;
}

export function isExpenseKey(key: string): key is ExpenseKey {
  return key in emptyExpense;
}

// export function isDailyFeedKey(key: string): key is DailyFeedKey {
//   return key in emptyDailyFeed;
// }

// export function isFeedKey(key: string): key is FeedKey {
//   return key in emptyFeed;
// }

// export function isFeedPurchaseKey(key: string): key is FeedPurchaseKey {
//   return key in emptyFeedPurchase;
// }

// export function isSupplyKey(key: string): key is SupplyKey {
//   return key in emptySupply;
// }

export interface CustomProjectFields {
  description: string;
  end_date: Date;
  name: string;
  start_date: Date;
  type: string;
  year: string;
}

export type AutoProjectFields = {
  id: string;
  user_id: string;
  created: string;
  updated: string;
};

export type Project = CustomProjectFields & AutoProjectFields;

export const emptyProject: Project = {
  id: "-1",
  user_id: "-1",
  created: "",
  updated: "",
  description: "",
  end_date: new Date(),
  name: "",
  start_date: new Date(),
  type: "",
  year: "",
};

export type AnimalProjectFields = {
  animal_cost: string;
  beginning_date: string;
  beginning_weight: number;
  birth_date: string;
  dam_breed: string;
  end_date: string;
  end_weight: number;
  name: string;
  project_id: string;
  purchase_date: string;
  quality_grade: string;
  sale_price: string;
  sire_breed: string;
  species: string;
  yield_grade: string;
};

export type Animal = AutoProjectFields & AnimalProjectFields;

export type DailyFeedProjectFields = {
  animal_id: string;
  feed_amount: number;
  feed_date: string;
  feed_id: string;
  feed_purchase_id: string;
  project_id: string;
};

export type DailyFeed = AutoProjectFields & DailyFeedProjectFields;

export type ExpenseProjectFields = {
  cost: number;
  date: string;
  items: string;
  project_id: string;
  quantity: number;
};

export type Expense = AutoProjectFields & ExpenseProjectFields;

export type FeedProjectFields = {
  name: string;
  project_id: string;
};

export type Feed = AutoProjectFields & FeedProjectFields;

export type FeedPurchaseProjectFields = {
  amount_purchased: number;
  date_purchased: string;
  feed_id: string;
  project_id: string;
  total_cost: number;
};

export type FeedPurchase = AutoProjectFields & FeedPurchaseProjectFields;

export type SupplyProjectFields = {
  description: string;
  end_value: number;
  project_id: string;
  start_value: number;
};

export type Supply = AutoProjectFields & SupplyProjectFields;

export type Empty = AutoProjectFields;

export type Gain = {
  beginning_date: string;
  beginning_weight: number;
  end_date: string;
  end_weight: number;
};

export type AnimalProjectTypes =
  | Animal
  | DailyFeed
  | Expense
  | Feed
  | FeedPurchase
  | Supply
  | Empty;

export const emptyAnimalProjectEntry: Empty = {
  id: "-1",
  user_id: "-1",
  created: "",
  updated: "",
};

export const emptyAnimal: Animal = {
  id: "-1",
  user_id: "-1",
  created: "",
  updated: "",
  animal_cost: "",
  beginning_date: "",
  beginning_weight: 0,
  birth_date: "",
  dam_breed: "",
  end_date: "",
  end_weight: 0,
  name: "",
  project_id: "",
  purchase_date: "",
  quality_grade: "",
  sale_price: "",
  sire_breed: "",
  species: "",
  yield_grade: "",
};

export const emptyExpense: Expense = {
  id: "-1",
  user_id: "-1",
  created: "",
  updated: "",
  project_id: "",
  cost: -1,
  date: "",
  items: "",
  quantity: -1,
};

export const emptyGain: Gain = {
  beginning_date: "",
  beginning_weight: -1,
  end_date: "",
  end_weight: -1,
};

// export const empty...: ... = {
//   id: "-1",
//   user_id: "-1",
//   created: "",
//   updated: "",
//   project_id: "",
// };

export function isProject(data: Project | undefined): data is Project {
  return typeof (data as Project) != undefined;
}

export function isExpense(data: AnimalProjectTypes): data is Expense {
  return (data as Expense).cost != undefined;
}

export function isAnimal(
  data: Animal | undefined | AnimalProjectTypes
): data is Animal {
  if (isAnimalProjectTypes(data)) {
    return (data as Animal).animal_cost != undefined;
  } else {
    return false;
  }
}

export function isAnimalProjectTypes(
  data: undefined | AnimalProjectTypes
): data is AnimalProjectTypes {
  return (data as AnimalProjectTypes) != undefined;
}

export function arrToUnionType(
  data:
    | Animal[]
    | DailyFeed[]
    | Expense[]
    | Feed[]
    | FeedPurchase[]
    | Supply[]
    | Empty[]
): data is AnimalProjectTypes[] {
  return (data as Animal[]) != undefined;
}

export const fetchAllProjects = async (jwt: string): Promise<Project[]> => {
  try {
    console.log("fetchAllProjects");

    const response = await fetch(`${buildBaseUrl()}project`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.projects as Project[];
  } catch (error) {
    throw error;
  }
};

export const fetchProject = async (
  jwt: string,
  projectID: string
): Promise<Project | string> => {
  try {
    const response = await fetch(`${buildBaseUrl()}project/${projectID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (response.status == 404) {
        return data.message as string;
      }
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.project as Project;
  } catch (error) {
    throw error;
  }
};

export const postProject = async (jwt: string, project: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}project`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
      body: project,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.project as Project;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (
  jwt: string,
  projectID: string,
  project: CustomProjectFields
) => {
  try {
    const response = await fetch(`${buildBaseUrl()}project/${projectID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
      body: JSON.stringify(project),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (jwt: string, projectID: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}project/${projectID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });
    switch (response.status) {
      case 204:
        return true;
      case 404:
        throw new Error("Entry not found");
      default:
        throw new Error(`Error: status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};

export const fetchSubpageEntriesByProject = async <T>(
  jwt: string,
  endpoint: string,
  project_id: string
): Promise<T[] | string> => {
  try {
    const response = await fetch(
      `${buildBaseUrl()}project/${project_id}/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json", // Adjust if needed
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      if (response.status == 404) {
        return data.message as string;
      }
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (endpoint) {
      case AnimalProjectTypeEndpoints.Animal:
        return data.animals as T[];
      case AnimalProjectTypeEndpoints.Expense:
        return data.expenses as T[];
      case AnimalProjectTypeEndpoints.Feed:
        return data.feeds as T[];
      case AnimalProjectTypeEndpoints.FeedPurchase:
        return data.feed_purchases as T[];
      case AnimalProjectTypeEndpoints.Supply:
        return data.supplies as T[];

      default:
        throw new Error(
          "Type is not supported by fetchSubpageEntriesByProject function"
        );
    }
  } catch (error) {
    throw error;
  }
};

export const fetchAnimal = async (
  jwt: string,
  animalID: string
): Promise<Animal | string> => {
  try {
    const response = await fetch(`${buildBaseUrl()}animal/${animalID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (response.status == 404) {
        return data.message as string;
      }
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.animal as Animal;
  } catch (error) {
    throw error;
  }
};

export const updateGain = async (
  jwt: string,
  animalID: string
): Promise<Animal | string> => {
  try {
    const response = await fetch(`${buildBaseUrl()}rate-of-gain/${animalID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (response.status == 404) {
        return data.message as string;
      }
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.animal as Animal;
  } catch (error) {
    throw error;
  }
};

export const fetchSubpageEntryById = async <T>(
  jwt: string,
  endpoint: string,
  id: string
): Promise<T | string> => {
  try {
    const response = await fetch(`${buildBaseUrl()}${endpoint}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status == 404) {
        return data.message as string;
      }
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (endpoint) {
      case AnimalProjectTypeEndpoints.Animal:
        return data.animal as T;
      case AnimalProjectTypeEndpoints.Expense:
        return data.expense as T;
      case AnimalProjectTypeEndpoints.Feed:
        return data.feed as T;
      case AnimalProjectTypeEndpoints.FeedPurchase:
        return data.feed_purchase as T;
      case AnimalProjectTypeEndpoints.Supply:
        return data.supply as T;
      case AnimalProjectTypeEndpoints.DailyFeed:
        return data.daily_feed as T;
      default:
        throw new Error(
          "Type is not supported by fetchSubpageEntryById  function"
        );
    }
  } catch (error) {
    throw error;
  }
};

export const postSubpageEntry = async <T>(
  jwt: string,
  endpoint: string,
  input: string
) => {
  try {
    console.log(endpoint);
    const response = await fetch(`${buildBaseUrl()}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
      body: input,
    });
    // code for after backend is updated to return created entry
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (endpoint) {
      case AnimalProjectTypeEndpoints.Animal:
        return data.animals as T;
      case AnimalProjectTypeEndpoints.Expense:
        return data.expense as T;
      case AnimalProjectTypeEndpoints.Feed:
        return data.feeds as T;
      case AnimalProjectTypeEndpoints.FeedPurchase:
        return data.feed_purchases as T;
      case AnimalProjectTypeEndpoints.Supply:
        return data.supplies as T;
      default:
        throw new Error(
          "Type is not supported by fetchSubpageEntriesByProject function"
        );
    }
  } catch (error) {
    throw error;
  }
};

export const updateSubpageEntry = async <T>(
  jwt: string,
  endpoint: string,
  id: string,
  input: string
) => {
  // return type for after backend is updated to return created entry
  // ): Promise<T> => {
  try {
    const response = await fetch(`${buildBaseUrl()}${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
      body: input,
    });
    // code for after backend is updated to return created entry
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    switch (endpoint) {
      case AnimalProjectTypeEndpoints.Animal:
        return data.animal as T;
      case AnimalProjectTypeEndpoints.Expense:
        return data.expense as T;
      case AnimalProjectTypeEndpoints.Feed:
        return data.feed as T;
      case AnimalProjectTypeEndpoints.FeedPurchase:
        return data.feed_purchase as T;
      case AnimalProjectTypeEndpoints.Supply:
        return data.supply as T;
      case AnimalProjectTypeEndpoints.Gain:
        return data.animal as T;
      default:
        throw new Error("Type is not supported by updateSubpageEntry function");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteSubpageEntry = async (
  jwt: string,
  endpoint: string,
  id: string
) => {
  try {
    const response = await fetch(`${buildBaseUrl()}${endpoint}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });
    switch (response.status) {
      case 204:
        return true;
      case 404:
        throw new Error("Entry not found");
      default:
        throw new Error(`Error: status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};
