"use client";

import { useState } from "react";
import { products, scents } from "@/lib/data";

const WAX_MELTS_ID = "snap-bar-wax-melts";
const MAX_WAX_MELTS_SCENTS = 7;

export type OrderLineItem = {
  id: string;
  productId: string;
  productName: string;
  /** Display string sent to WhatsApp */
  scent: string;
  /** Multiple scents for wax melt bundles */
  scents?: string[];
  quantity: number;
};

type OrderBuilderProps = {
  items: OrderLineItem[];
  onChange: (items: OrderLineItem[]) => void;
};

function scentsKey(scentList: string[]): string {
  return [...scentList].sort().join("|");
}

function formatScentLine(item: OrderLineItem): string {
  if (item.scents && item.scents.length > 0) {
    const bundle =
      item.scents.length === MAX_WAX_MELTS_SCENTS ? " (7 for £20)" : "";
    return `${item.quantity}x ${item.productName}${bundle} - ${item.scents.join(", ")}`;
  }
  return `${item.quantity}x ${item.productName} - ${item.scent}`;
}

export function buildOrderTextFromItems(items: OrderLineItem[]): string {
  return items.map(formatScentLine).join("\n");
}

export default function OrderBuilder({ items, onChange }: OrderBuilderProps) {
  const [productId, setProductId] = useState<string>(products[0].id);
  const [scent, setScent] = useState<string>(scents[0]);
  const [waxMeltsScents, setWaxMeltsScents] = useState<string[]>([]);
  const [waxMeltsPickerScent, setWaxMeltsPickerScent] = useState<string>("");
  const [addError, setAddError] = useState("");

  const isWaxMelts = productId === WAX_MELTS_ID;
  const selectedProduct = products.find((p) => p.id === productId);

  const availableWaxMeltsScents = scents.filter((s) => !waxMeltsScents.includes(s));

  function handleProductChange(newProductId: string) {
    setProductId(newProductId);
    setWaxMeltsScents([]);
    setWaxMeltsPickerScent("");
    setAddError("");
    setScent(scents[0]);
  }

  function addWaxMeltScent() {
    setAddError("");
    const toAdd = waxMeltsPickerScent || availableWaxMeltsScents[0];
    if (!toAdd) return;

    if (waxMeltsScents.length >= MAX_WAX_MELTS_SCENTS) {
      setAddError(`You can select up to ${MAX_WAX_MELTS_SCENTS} scents per wax melt order.`);
      return;
    }

    if (waxMeltsScents.includes(toAdd)) return;

    setWaxMeltsScents([...waxMeltsScents, toAdd]);
    setWaxMeltsPickerScent("");
  }

  function removeWaxMeltScent(scentToRemove: string) {
    setWaxMeltsScents(waxMeltsScents.filter((s) => s !== scentToRemove));
    setAddError("");
  }

  function addItem() {
    setAddError("");
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    if (isWaxMelts) {
      if (waxMeltsScents.length === 0) {
        setAddError("Please add at least one scent to your wax melt order.");
        return;
      }

      const scentDisplay = waxMeltsScents.join(", ");
      const key = scentsKey(waxMeltsScents);
      const existing = items.find(
        (item) =>
          item.productId === WAX_MELTS_ID &&
          item.scents &&
          scentsKey(item.scents) === key
      );

      if (existing) {
        onChange(
          items.map((item) =>
            item.id === existing.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        onChange([
          ...items,
          {
            id: `${WAX_MELTS_ID}-${key}-${Date.now()}`,
            productId: WAX_MELTS_ID,
            productName: product.name,
            scent: scentDisplay,
            scents: [...waxMeltsScents],
            quantity: 1,
          },
        ]);
      }

      setWaxMeltsScents([]);
      setWaxMeltsPickerScent("");
      return;
    }

    const existing = items.find(
      (item) =>
        item.productId === productId &&
        !item.scents &&
        item.scent === scent
    );

    if (existing) {
      onChange(
        items.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      onChange([
        ...items,
        {
          id: `${productId}-${scent}-${Date.now()}`,
          productId,
          productName: product.name,
          scent,
          quantity: 1,
        },
      ]);
    }
  }

  function updateQuantity(id: string, delta: number) {
    onChange(
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id: string) {
    onChange(items.filter((item) => item.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-gold/15 bg-charcoal-light/20 p-5 md:p-6">
        <p className="eyebrow mb-4 text-gold-light">Add Items</p>

        <div className={isWaxMelts ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
          <div>
            <label
              htmlFor="product-select"
              className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted"
            >
              Product
            </label>
            <select
              id="product-select"
              value={productId}
              onChange={(e) => handleProductChange(e.target.value)}
              className="luxury-select"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} — {product.price}
                </option>
              ))}
            </select>
          </div>

          {isWaxMelts ? (
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <label
                  htmlFor="wax-scent-select"
                  className="text-xs uppercase tracking-[0.18em] text-muted"
                >
                  Scents (up to {MAX_WAX_MELTS_SCENTS})
                </label>
                <span className="text-xs text-gold-light/80">
                  {waxMeltsScents.length} / {MAX_WAX_MELTS_SCENTS} selected
                </span>
              </div>

              <p className="mb-3 text-xs leading-relaxed text-muted">
                Add up to 7 scents in one order — ideal for our 7 for £20 deal.
              </p>

              {waxMeltsScents.length > 0 && (
                <ul className="mb-4 flex flex-wrap gap-2">
                  {waxMeltsScents.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => removeWaxMeltScent(s)}
                        className="group flex items-center gap-2 rounded-sm border border-gold/25 bg-charcoal-light/50 px-3 py-2 text-sm text-cream transition-colors hover:border-gold/40 hover:bg-gold/5"
                      >
                        {s}
                        <span
                          className="text-xs text-muted group-hover:text-red-400/90"
                          aria-hidden
                        >
                          ×
                        </span>
                        <span className="sr-only">Remove {s}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {waxMeltsScents.length < MAX_WAX_MELTS_SCENTS && (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <select
                    id="wax-scent-select"
                    value={waxMeltsPickerScent || availableWaxMeltsScents[0] || ""}
                    onChange={(e) => setWaxMeltsPickerScent(e.target.value)}
                    className="luxury-select flex-1"
                  >
                    {availableWaxMeltsScents.length === 0 ? (
                      <option value="">All scents selected</option>
                    ) : (
                      availableWaxMeltsScents.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))
                    )}
                  </select>
                  <button
                    type="button"
                    onClick={addWaxMeltScent}
                    disabled={availableWaxMeltsScents.length === 0}
                    className="shrink-0 rounded-sm border border-gold/25 px-5 py-3 text-xs uppercase tracking-[0.18em] text-gold-light transition-colors hover:border-gold/45 hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    + Add Scent
                  </button>
                </div>
              )}

              {waxMeltsScents.length === MAX_WAX_MELTS_SCENTS && (
                <p className="mt-3 text-xs text-gold-light/90">
                  7 scents selected — qualifies for 7 for £20 pricing.
                </p>
              )}
            </div>
          ) : (
            <div>
              <label
                htmlFor="scent-select"
                className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted"
              >
                Scent
              </label>
              <select
                id="scent-select"
                value={scent}
                onChange={(e) => setScent(e.target.value)}
                className="luxury-select"
              >
                {scents.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {selectedProduct && (
          <p className="mt-3 text-xs text-muted">{selectedProduct.price}</p>
        )}

        {addError && (
          <p className="mt-3 text-sm text-red-400/90" role="alert">
            {addError}
          </p>
        )}

        <button
          type="button"
          onClick={addItem}
          className="mt-5 w-full rounded-sm border border-gold/30 bg-gold/10 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:border-gold/50 hover:bg-gold/15 sm:w-auto"
        >
          + Add to Order
        </button>
      </div>

      <div>
        <p className="eyebrow mb-4 text-gold-light">Your Order</p>

        {items.length === 0 ? (
          <div className="rounded-sm border border-dashed border-gold/20 px-6 py-10 text-center">
            <p className="text-sm text-muted">
              Select a product and scent above, then tap{" "}
              <span className="text-cream">Add to Order</span>.
              {isWaxMelts
                ? " For wax melts, add up to 7 scents before adding to your order."
                : " Tap again to add more of the same item."}
            </p>
          </div>
        ) : (
          <ul className="space-y-3" aria-label="Order items">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 rounded-sm border border-gold/15 bg-charcoal-light/30 p-4 sm:flex-row sm:items-start sm:justify-between md:p-5"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-cream md:text-[0.9375rem]">
                    {item.productName}
                    {item.scents?.length === MAX_WAX_MELTS_SCENTS && (
                      <span className="ml-2 text-xs text-gold-light/80">(7 for £20)</span>
                    )}
                  </p>
                  {item.scents && item.scents.length > 0 ? (
                    <ul className="mt-2 space-y-1">
                      {item.scents.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-gold-light/90">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-gold/60" aria-hidden />
                          {s}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-sm text-gold-light/90">{item.scent}</p>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-1 rounded-sm border border-gold/20">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="flex h-11 w-11 items-center justify-center text-lg text-gold-light transition-colors hover:bg-gold/10"
                      aria-label={`Decrease quantity of ${item.productName}`}
                    >
                      −
                    </button>
                    <span className="min-w-[2.5rem] text-center text-sm font-medium text-cream">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="flex h-11 w-11 items-center justify-center text-lg text-gold-light transition-colors hover:bg-gold/10"
                      aria-label={`Increase quantity of ${item.productName}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-red-400/90"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
