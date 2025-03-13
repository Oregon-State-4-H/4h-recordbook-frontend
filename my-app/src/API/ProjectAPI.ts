import Head from "next/head";

export enum AnimalProjectTypeEndpoints {
  Animal = "animal",
  DailyFeed = "daily-feed",
  Expense = "expense",
  Feed = "feed",
  FeedPurchase = "feed-purchase",
  Supply = "supply",
  Empty = "",
}

export const AnimalHeaders: string[] = [];
export const DailyFeedHeaders: string[] = [];
export const ExpenseHeaders: string[] = ["cost", "date", "items", "quantity"];
export const FeedHeaders: string[] = [];
export const FeedPurchaseHeaders: string[] = [];
export const SupplyHeaders: string[] = [];
export const EmptyHeaders: string[] = [];

export const AnimalProjectTypeHeaders: { [key: string]: string[] } = {
  Animal: AnimalHeaders,
  DailyFeed: DailyFeedHeaders,
  Expense: ExpenseHeaders,
  Feed: FeedHeaders,
  FeedPurchase: FeedPurchaseHeaders,
  Supply: SupplyHeaders,
  Empty: EmptyHeaders,
};

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

export const fetchAllProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      method: "GET",
      credentials: "include",
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
  projectID: string
): Promise<Project | string> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.project as Project;
  } catch (error) {
    const err: string = "error";
    return err;
  }
};

export const postProject = async (project: CustomProjectFields) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      method: "POST",
      credentials: "include",
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

export const updateProject = async (
  projectID: string,
  project: CustomProjectFields
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`,
      {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(project),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (projectID: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const fetchSubpageEntriesByProject = async <T>(
  endpoint: string,
  project_id: string
): Promise<T[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}?projectID=${project_id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    if (!response.ok) {
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
